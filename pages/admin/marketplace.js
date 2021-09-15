import React from 'react';
import AdminLayout from 'layout/admin/layout';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3Modal from 'web3modal';
import { nftaddress, nftmarketaddress, nftauctionaddress } from '../../config';
import PolygonApi from 'lib/api/Polygon';

import NFT from '../../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../../artifacts/contracts/Market.sol/NFTMarket.json'
import Auction from '../../artifacts/contracts/Auction.sol/NFTAuction.json'

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marketNFTs: [],
            auctionNFTs: [],
            auctionBids: {},
            loadingState: 'not-loaded',
            bidValue: 0,
        };
        this.loadNFTs = this.loadNFTs.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getAuctionBids = this.getAuctionBids.bind(this);
        this.getBidsOnItem = this.getBidsOnItem.bind(this);
    }

    async componentDidMount() {
        await this.loadNFTs()
        await this.getAuctionBids()
        console.log(this.state.auctionBids)
    }

    async getAuctionBids() {
        const { auctionNFTs } = this.state;
        const auctionBids = {};
        for (let i = 0; i < auctionNFTs.length; i++) {
            const tokenId = auctionNFTs[i].tokenId;
            auctionBids[tokenId] = await this.getBidsOnItem(tokenId);
        }
        this.setState({ auctionBids: { ...auctionBids } });
    }

    async loadNFTs() {
        /* create a generic provider and query for unsold market items */
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider);
        const auctionContract = new ethers.Contract(nftauctionaddress, Auction.abi, provider);
        const marketData = await marketContract.fetchMarketItems();
        const auctionData = await auctionContract.fetchAuctionItems();
        /*
         *  map over items returned from smart contract and format
         *  them as well as fetch their token metadata
         */
        const marketItems = await Promise.all(
            marketData.map(async (i) => {
                const tokenUri = await tokenContract.tokenURI(i.tokenId);
                const meta = await axios.get(tokenUri);
                let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
                let item = {
                    price: price,
                    tokenId: i.tokenId.toNumber(),
                    seller: i.seller,
                    owner: i.owner,
                    image: meta.data.image,
                    name: meta.data.name,
                    description: meta.data.description,
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
                    price: price,
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

        this.setState({
            marketNFTs: marketItems,
            auctionNFTs: [...auctionItems],
            loadingState: 'loaded',
        });
    }

    async onChange(e) {
        const bidValue = e.target.value;
        this.setState({ bidValue: bidValue });
    }

    async buyNft(nft) {
        /* needs the user to sign the transaction, so will use Web3Provider and sign it */
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
        try {
            const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
            console.log(price);
            const gas = await new PolygonApi().getGas();
            const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, {
                value: price,
                gasPrice: gas ? gas.fast * 10 ** 9 : 5000000000,
            });
            await transaction.wait();
            this.loadNFTs();
        } catch (error) {
            throw new Error(error.message);
        }

        /* user will be prompted to pay the asking proces to complete the transaction */
    }

    async bidNft(nft) {
        /* needs the user to sign the transaction, so will use Web3Provider and sign it */
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(nftauctionaddress, Auction.abi, signer);
        try {
            const price = ethers.utils.parseUnits(this.state.bidValue.toString(), 'ether');
            const gas = await new PolygonApi().getGas();

            const transaction = await contract.bid(nft.tokenId, {
                value: price,
                gasPrice: gas ? gas.fast * 10 ** 9 : 5000000000,
            });
            await transaction.wait();
            this.loadNFTs();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async endAuction(nft) {
        /* needs the user to sign the transaction, so will use Web3Provider and sign it */
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(nftauctionaddress, Auction.abi, signer);
        try {
            const gas = await new PolygonApi().getGas();
            const transaction = await contract.auctionEnd(nft.tokenId, {
                gasPrice: gas ? gas.fast * 10 ** 9 : 5000000000,
            });
            await transaction.wait();
            this.loadNFTs();
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getBidsOnItem(auctionTokenId) {
        const data = await axios.get(`/api/bids/${auctionTokenId}`)
        return data.data.data
    }
    render() {
        if (
            this.state.loadingState === 'loaded' &&
            !this.state.marketNFTs.length &&
            !this.state.auctionNFTs.length
        )
            return <h1 className="">No items in marketplace</h1>;
        return (
            <AdminLayout>
                <div className="">
                    <div className="" style={{ maxWidth: '400px' }}>
                        <div className="market-items">
                            {this.state.marketNFTs.length &&
                                this.state.marketNFTs.map((nft, i) => {
                                    return (
                                        <div key={i} className="">
                                            <img src={nft.image} width="200px" />
                                            <div className="">
                                                <p style={{ height: '64px' }} className="">
                                                    {nft.name}
                                                </p>
                                                <div style={{ height: '70px', overflow: 'hidden' }}>
                                                    <p className="">{nft.description}</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <p className="">{nft.price} MATIC</p>
                                                <button
                                                    className=""
                                                    onClick={() => this.buyNft(nft)}
                                                >
                                                    Buy
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="auction-items">
                            {this.state.auctionNFTs.length &&
                                this.state.auctionNFTs.map((nft, i) => {
                                    return (
                                        <div key={i} className="">
                                            <img src={nft.image} width="200px" />
                                            <div className="">
                                                <p style={{ height: '64px' }} className="">
                                                    {nft.name}
                                                </p>
                                                <div style={{ height: '70px', overflow: 'hidden' }}>
                                                    <p className="">{nft.description}</p>
                                                    <p className="">{String(nft.ended)}</p>
                                                    <p className="">{String(nft.endTime)}</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <p className="">{nft.price} MATIC</p>
                                                <input
                                                    type="text"
                                                    name="bid-value"
                                                    className=""
                                                    value={this.state.bidValue}
                                                    onChange={this.onChange}
                                                />
                                                <button
                                                    className=""
                                                    onClick={() => this.bidNft(nft)}
                                                >
                                                    Bid
                                                </button>
                                            </div>
                                            <div>
                                                {Object.keys(this.state.auctionBids).length &&
                                                    this.state.auctionBids[nft.tokenId].map(
                                                        (bid, i) => {
                                                            return (
                                                                <>
                                                                    <div>
                                                                        {bid.amount / 10 ** 18}{' '}
                                                                        MATIC
                                                                    </div>
                                                                    <div>{bid.bidder}</div>
                                                                </>
                                                            );
                                                        }
                                                    )}
                                            </div>
                                            <div>
                                                <button
                                                    className=""
                                                    onClick={() => this.endAuction(nft)}
                                                >
                                                    End Auction
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default Admin;
