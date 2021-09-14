import React from 'react';
import AdminLayout from 'layout/admin/layout';
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import {
    nftaddress, nftmarketaddress, nftauctionaddress
} from '../../config'

import NFT from '../../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../../artifacts/contracts/Market.sol/NFTMarket.json'
import Auction from '../../artifacts/contracts/Auction.sol/NFTAuction.json'
import { GraphQLClient, gql } from 'graphql-request'

let subgraphendpoint = '';
import { subGraphTestnetEndpoint, subGraphMainnetEndpoint } from '../../lib/constants';
if (process.env.SMART_CONTRACT_ENV == 'mainnet') {
    subgraphendpoint = subGraphMainnetEndpoint;
}
else {
    subgraphendpoint = subGraphTestnetEndpoint;
}

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marketNFTs: [],
            auctionNFTs: [],
            loadingState: 'not-loaded',
            bidValue: 0
        }
        this.onChange = this.onChange.bind(this);
    }


    componentDidMount() {
        this.loadNFTs()
    }

    async loadNFTs() {
        /* create a generic provider and query for unsold market items */
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
        const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
        const auctionContract = new ethers.Contract(nftauctionaddress, Auction.abi, provider)
        const marketData = await marketContract.fetchMarketItems()
        const auctionData = await auctionContract.fetchAuctionItems()
        /*
        *  map over items returned from smart contract and format 
        *  them as well as fetch their token metadata
        */
        const marketItems = await Promise.all(marketData.map(async i => {
            const tokenUri = await tokenContract.tokenURI(i.tokenId)
            const meta = await axios.get(tokenUri)
            let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
            let item = {
                price,
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                image: meta.data.image,
                name: meta.data.name,
                description: meta.data.description,
            }

            return item
        }))
        console.log(marketItems)
        const auctionItems = await Promise.all(auctionData.map(async i => {
            const tokenUri = await tokenContract.tokenURI(i.tokenId)
            const meta = await axios.get(tokenUri)
            let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
            const date = new Date(parseInt(i.endTime._hex * 1000))
            let item = {
                price,
                tokenId: i.tokenId.toNumber(),
                seller: i.seller,
                owner: i.owner,
                ended: i.ended,
                endTime: date,
                image: meta.data.image,
                name: meta.data.name,
                description: meta.data.description,
            }
            return item
        }))

        console.log(auctionItems)
        this.setState({
            marketNFTs: marketItems,
            auctionNFTs: [...auctionItems],
            loadingState: 'loaded'
        })

    }

    async onChange(e) {
        const bidValue = e.target.value
        this.setState({ bidValue: bidValue })

    }

    async buyNft(nft) {
        /* needs the user to sign the transaction, so will use Web3Provider and sign it */
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

        /* user will be prompted to pay the asking proces to complete the transaction */
        const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
        const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, {
            value: price,
            gasLimit: 1000000
        })
        await transaction.wait()
        this.loadNFTs()
    }

    async bidNft(nft) {
        /* needs the user to sign the transaction, so will use Web3Provider and sign it */
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(nftauctionaddress, Auction.abi, signer)

        /* user will be prompted to pay the asking proces to complete the transaction */
        const price = ethers.utils.parseUnits(this.state.bidValue.toString(), 'ether')
        console.log(`bid on ${nft.tokenId}`)
        const transaction = await contract.bid(nft.tokenId, {
            value: price,
            gasLimit: 1000000
        })
        await transaction.wait()
        this.loadNFTs()
    }

    async endAuction(nft) {
        /* needs the user to sign the transaction, so will use Web3Provider and sign it */
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(nftauctionaddress, Auction.abi, signer)

        /* user will be prompted to pay the asking proces to complete the transaction */
        const transaction = await contract.auctionEnd(nft.tokenId, {
            gasLimit: 1000000
        })
        await transaction.wait()
        this.loadNFTs()
    }

    async getBidsOnItem(auctionTokenId) {
        const graphQLClient = new GraphQLClient(subgraphendpoint, {
            headers: {
                authorization: process.env.THE_GRAPH_KEY,
            },
        })

        const query = `{
            highestBidIncreaseds(where: {tokenId: ${auctionTokenId}}) {
              id
              tokenId
              amount
              bidder
            }
          }`

        const data = await graphQLClient.request(query)
        console.log(data.highestBidIncreaseds)
        return data.highestBidIncreaseds
    }
    render() {
        if (this.state.loadingState === 'loaded' && !this.state.marketNFTs.length && !this.state.auctionNFTs.length) return (<h1 className="">No items in marketplace</h1>)
        let auctionBids = {};

        this.state.auctionNFTs && this.state.auctionNFTs.every(async (nft, i) => {
            auctionBids[nft.tokenId] = await this.getBidsOnItem(nft.tokenId);
        })
        return (
            <AdminLayout>
                <div className="">
                    <div className="" style={{ maxWidth: '400px' }}>
                        <div className="market-items">
                            {
                                this.state.marketNFTs.length && this.state.marketNFTs.map((nft, i) => {
                                    return (
                                        <div key={i} className="">
                                            <img src={nft.image} width='200px' />
                                            <div className="">
                                                <p style={{ height: '64px' }} className="">{nft.name}</p>
                                                <div style={{ height: '70px', overflow: 'hidden' }}>
                                                    <p className="">{nft.description}</p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <p className="">{nft.price} MATIC</p>
                                                <button className="" onClick={() => this.buyNft(nft)}>Buy</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="auction-items">
                            {
                                this.state.auctionNFTs.length && this.state.auctionNFTs.map((nft, i) => {
                                    return (
                                        <div key={i} className="">
                                            <img src={nft.image} width='200px' />
                                            <div className="">
                                                <p style={{ height: '64px' }} className="">{nft.name}</p>
                                                <div style={{ height: '70px', overflow: 'hidden' }}>
                                                    <p className="">{nft.description}</p>
                                                    <p className="">{String(nft.ended)}</p>
                                                    <p className="">{String(nft.endTime)}</p>
                                                </div>

                                            </div>
                                            <div className="">
                                                <p className="">{nft.price} MATIC</p>
                                                <input type="text" name="bid-value" className="" value={this.state.bidValue} onChange={this.onChange} />
                                                <button className="" onClick={() => this.bidNft(nft)}>Bid</button>
                                            </div>
                                            <div>
                                                {auctionBids[nft.tokenId] && auctionBids[nft.tokenId].map((bid, i) => {
                                                    return (
                                                        <div>
                                                            <p>{bid.amount}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div>
                                                <button className="" onClick={() => this.endAuction(nft)}>End Auction</button>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default Admin;
