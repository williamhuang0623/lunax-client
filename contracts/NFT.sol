// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
// import '@openzeppelin/contracts/access/Ownable.sol';

import 'hardhat/console.sol';

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address marketContractAddress;
    address auctionContractAddress;

    constructor(address _marketplaceAddress, address _auctionContractAddress) ERC721('Luna NFTs', 'LUNA') {
        marketContractAddress = _marketplaceAddress;
        auctionContractAddress = _auctionContractAddress;
    }

    function createToken(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(marketContractAddress, true);
        setApprovalForAll(auctionContractAddress, true);
        return newItemId;
    }
}
