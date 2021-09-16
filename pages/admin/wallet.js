import React from 'react';
import AdminLayout from 'layout/admin/layout';
import { ethers } from 'ethers';

import axios from 'axios';
import Web3Modal from 'web3modal';

import { nftmarketaddress, nftaddress, nftauctionaddress } from '../../config';

import Market from '../../artifacts/contracts/Market.sol/NFTMarket.json';
import NFT from '../../artifacts/contracts/NFT.sol/NFT.json';
import Auction from '../../artifacts/contracts/Auction.sol/NFTAuction.json';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marketItems: [],
            auctionItems: [],
            loadingState: 'not-loaded',
        };
    }

    componentDidMount() {
        this.loadNFTs();
    }

    async loadNFTs() {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
        const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
        const auctionContract = new ethers.Contract(nftauctionaddress, Auction.abi, provider);

        const marketData = await marketContract.fetchMyNFTs();
        const auctionData = await auctionContract.fetchMyNFTs();

        const marketItems = await Promise.all(
            marketData.map(async (i) => {
                const tokenUri = await tokenContract.tokenURI(i.tokenId);
                const meta = await axios.get(tokenUri);
                let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
                let item = {
                    price,
                    tokenId: i.tokenId.toNumber(),
                    seller: i.seller,
                    owner: i.owner,
                    image: meta.data.image,
                };
                return item;
            })
        );
        const auctionItems = await Promise.all(
            auctionData.map(async (i) => {
                const tokenUri = await tokenContract.tokenURI(i.tokenId);
                const meta = await axios.get(tokenUri);
                let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
                const date = new Date(parseInt(i.endTime._hex * 1000));
                let item = {
                    price,
                    tokenId: i.tokenId.toNumber(),
                    seller: i.seller,
                    owner: i.owner,
                    ended: i.ended,
                    endTime: date,
                    image: meta.data.image,
                    name: meta.data.name,
                    highestBidder: i.highestBidder,
                    description: meta.data.description,
                };
                return item;
            })
        );

        this.setState({ marketItems: marketItems, auctionItems: auctionItems });
        this.setState({ loadingState: 'loaded' });
    }

    render() {
        if (
            this.state.loadingState === 'loaded' &&
            !this.state.marketItems.length &&
            !this.state.auctionItems.length
        )
            return <h1 className="">No assets owned</h1>;
        return (
            <AdminLayout>
                <h1>NFTs you own</h1>
                <div className="">
                    <div className="">
                        <div className="">
                            {this.state.marketItems.map((nft, i) => (
                                <div key={i} className="">
                                    <img src={nft.image} width="400px" />
                                    <div className="">
                                        <p className="">Price - {nft.price} Matic</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            {this.state.auctionItems.map((nft, i) => (
                                <div key={i} className="">
                                    <img src={nft.image} width="400px" />
                                    <div className="">
                                        <p className="">Price - {nft.price} Matic</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default Admin;
