import React from 'react';
import AdminLayout from 'layout/admin/layout';
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import axios from 'axios'
import {
    nftaddress, nftmarketaddress, nftauctionaddress
} from '../../config'

import NFT from '../../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../../artifacts/contracts/Market.sol/NFTMarket.json'

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nfts: [],
            sold: [],
            loadingState: 'not-loaded'
        }
    }

    componentDidMount() {
        this.loadNFTs()
    }

    async loadNFTs() {
        const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
        })
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
        const auctionContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

        const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
        const marketData = await marketContract.fetchItemsCreated()
        const auctionData = await auctionContract.fetchItemsCreated()
        const data = marketData.concat(auctionData)
        const items = await Promise.all(data.map(async i => {
            const tokenUri = await tokenContract.tokenURI(i.tokenId)
            const meta = await axios.get(tokenUri)
            let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
            let item = {
                price,
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                sold: i.sold,
                image: meta.data.image,
            }
            return item
        }))
        /* create a filtered array of items that have been sold */
        const soldItems = items.filter(i => i.sold)
        this.setState({ sold: soldItems })
        this.setState({ nfts: items })
        this.setState({ loadingState: 'loaded' })
    }

    render() {
        if (this.state.loadingState === 'loaded' && !this.state.nfts.length) return (<h1 className="">No assets created</h1>)
        return (
            <AdminLayout>
                <h1>NFT Manager</h1>
                <div>
                    <div className="">
                        <h2 className="">Items Created</h2>
                        <div className="">
                            {
                                this.state.nfts.map((nft, i) => (
                                    <div key={i} className="">
                                        <img src={nft.image} width="400px" />
                                        <div className="">
                                            <p className="">Price - {nft.price} Eth</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="px-4">
                        {
                            Boolean(this.state.sold.length) && (
                                <div>
                                    <h2 className="">Items sold</h2>
                                    <div className="">
                                        {
                                            this.state.sold.map((nft, i) => (
                                                <div key={i} className="">
                                                    <img src={nft.image} width="400px" />
                                                    <div className="">
                                                        <p className="">Price - {nft.price} Eth</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default Admin;
