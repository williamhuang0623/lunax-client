const hre = require("hardhat");
const fs = require('fs');
require('dotenv').config()

async function main() {
    const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
    const nftMarket = await NFTMarket.deploy();
    await nftMarket.deployed();
    console.log("nftMarket deployed to:", nftMarket.address);

    const NFTAuction = await hre.ethers.getContractFactory("NFTAuction");
    const nftAuction = await NFTAuction.deploy();
    await nftAuction.deployed();
    console.log("nftAuction deployed to:", nftAuction.address);

    const NFT = await hre.ethers.getContractFactory("NFT");
    const nft = await NFT.deploy(nftMarket.address, nftAuction.address);
    await nft.deployed();
    console.log("nft deployed to:", nft.address);

    if (process.env.SMART_CONTRACT_ENV == "local") {
        let config = `
        export const _nftmarketaddress_local = "${nftMarket.address}"
        export const _nftauctionaddress_local = "${nftAuction.address}"
        export const _nftaddress_local = "${nft.address}"
        `
        let data = JSON.stringify(config)

        fs.writeFileSync('local-config.js', JSON.parse(data))
    }
    else if (process.env.SMART_CONTRACT_ENV == "testnet") {
        let config = `
        export const _nftmarketaddress_testnet = "${nftMarket.address}"
        export const _nftauctionaddress_testnet = "${nftAuction.address}"
        export const _nftaddress_testnet = "${nft.address}"      
        `
        let data = JSON.stringify(config)

        fs.writeFileSync('testnet-config.js', JSON.parse(data))
    }
    else if (process.env.SMART_CONTRACT_ENV == "mainnet") {
        let config = `
        export const _nftmarketaddress_mainnet = "${nftMarket.address}"
        export const _nftauctionaddress_mainnet = "${nftAuction.address}"
        export const _nftaddress_mainnet = "${nft.address}"      
        `
        let data = JSON.stringify(config)

        fs.writeFileSync('mainnet-config.js', JSON.parse(data))
    }


}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });