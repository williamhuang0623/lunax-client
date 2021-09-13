import React from 'react';
import AdminLayout from 'layout/admin/layout';
import { ethers } from 'ethers'

import axios from 'axios'
import Web3Modal from "web3modal"

import {
    nftmarketaddress, nftaddress, nftauctionaddress
} from '../../config'

import Market from '../../artifacts/contracts/Market.sol/NFTMarket.json'
import NFT from '../../artifacts/contracts/NFT.sol/NFT.json'


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nfts: [],
            loadingState: 'not-loaded'
        }
    }

    componentDidMount() {
        this.loadNFTs()
    }

    async loadNFTs() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
        const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
        const data = await marketContract.fetchMyNFTs()

        const items = await Promise.all(data.map(async i => {
            const tokenUri = await tokenContract.tokenURI(i.tokenId)
            const meta = await axios.get(tokenUri)
            let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
            let item = {
                price,
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                image: meta.data.image,
            }
            return item
        }))
        this.setState({ nfts: items })
        this.setState({ loadingState: 'loaded' })
    }

    render() {
        if (this.state.loadingState === 'loaded' && !this.state.nfts.length) return (<h1 className="">No assets owned</h1>)
        return (
            <AdminLayout>
                <h1>NFTs you own</h1>
                <div className="">
                    <div className="">
                        <div className="">
                            {
                                this.state.nfts.map((nft, i) => (
                                    <div key={i} className="">
                                        <img src={nft.image} width="400px" />
                                        <div className="">
                                            <p className="">Price - {nft.price} Matic</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default Admin;
