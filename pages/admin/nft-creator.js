import React from 'react';
import AdminLayout from 'layout/admin/layout';
import { useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { useRouter } from 'next/router';

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

import { nftaddress, nftmarketaddress, nftauctionaddress } from '../../config';

import NFT from '../../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../../artifacts/contracts/Market.sol/NFTMarket.json';
import Auction from '../../artifacts/contracts/Auction.sol/NFTAuction.json';
import PolygonApi from 'lib/api/Polygon';

export default function CreateItem() {
    const [fileUrl, setFileUrl] = useState(null);
    const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' });
    const router = useRouter();

    async function onChange(e) {
        const file = e.target.files[0];
        try {
            const added = await client.add(file, {
                progress: (prog) => console.log(`received: ${prog}`),
            });
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            setFileUrl(url);
        } catch (error) {
            console.error('Error uploading file: ', error);
        }
    }
    async function createMarket() {
        const { name, description, price } = formInput;
        if (!name || !description || !price || !fileUrl) return;
        /* first, upload to IPFS */
        const data = JSON.stringify({
            name,
            description,
            image: fileUrl,
        });
        try {
            const added = await client.add(data);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
            createSale(url);
        } catch (error) {
            console.log('Error uploading file: ', error);
        }
    }

    async function createAuction() {
        const { name, description, price } = formInput;
        if (!name || !description || !price || !fileUrl) return;
        /* first, upload to IPFS */
        const data = JSON.stringify({
            name,
            description,
            image: fileUrl,
        });
        try {
            const added = await client.add(data);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
            createAuctionItem(url);
        } catch (error) {
            console.log('Error uploading file: ', error);
        }
    }

    async function createSale(url) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
        try {
            const gas = await new PolygonApi().getGas();
            let transaction = await contract.createToken(url, {
                gasPrice: gas ? gas.fast * 10 ** 9 : 5000000000,
            });
            let tx = await transaction.wait();
            let event = tx.events[0];
            let value = event.args[2];
            let tokenId = value.toNumber();
            const price = ethers.utils.parseUnits(formInput.price, 'ether');
            contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

            transaction = await contract.createMarketItem(nftaddress, tokenId, price, {
                gasPrice: gas ? gas.fast * 10 ** 9 : 5000000000,
            });
            await transaction.wait();
            router.push('/admin/marketplace');
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async function createAuctionItem(url) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        /* next, create the item */
        try {
            const gas = await new PolygonApi().getGas();
            let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
            let transaction = await contract.createToken(url, {
                gasPrice: gas ? gas.fast * 10 ** 9 : 5000000000,
            });
            let tx = await transaction.wait();
            let event = tx.events[0];
            let value = event.args[2];
            let tokenId = value.toNumber();
            const price = ethers.utils.parseUnits(formInput.price, 'ether');

            contract = new ethers.Contract(nftauctionaddress, Auction.abi, signer);
            const auctionTimeInSeconds = 120;
            transaction = await contract.createAuctionItem(
                nftaddress,
                tokenId,
                price,
                auctionTimeInSeconds,
                {
                    value: 0,
                    gasPrice: gas ? gas.fast * 10 ** 9 : 5000000000,
                }
            );
            await transaction.wait();
            router.push('/admin/marketplace');
        } catch (error) {
            throw new Error(error.message);
        }
    }
    return (
        <AdminLayout>
            <h1>NFT Creator</h1>
            <div className="">
                <div className="">
                    <input
                        placeholder="Asset Name"
                        className=""
                        onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}
                    />
                    <textarea
                        placeholder="Asset Description"
                        className=""
                        onChange={(e) =>
                            updateFormInput({ ...formInput, description: e.target.value })
                        }
                    />
                    <input
                        placeholder="Asset Price in Matic"
                        className=""
                        onChange={(e) => updateFormInput({ ...formInput, price: e.target.value })}
                    />
                    <input type="file" name="Asset" className="my-4" onChange={onChange} />
                    {fileUrl && <img className="" width="350" src={fileUrl} />}
                    <button onClick={createMarket} className="">
                        Sell at market
                    </button>
                    <button onClick={createAuction} className="">
                        Sell as auction
                    </button>
                </div>
            </div>
        </AdminLayout>
    );
}
