// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "hardhat/console.sol";

contract NFTAuction is ReentrancyGuard {
    using Counters for Counters.Counter;
    using SafeMath for uint256;
    using Address for address;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;

    // Deployment address
    address private owner;
    uint256 listingPrice = 0.025 ether;

    constructor() {
        owner = msg.sender;
    }

    struct AuctionItem {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        address payable highestBidder;
        uint highestBid;
        uint price;
        uint endTime;
        bool ended;
    }

    // Mapping from itemID to address and bid
    mapping(uint256 => mapping(address => uint)) pendingReturns;
    // Allowed withdrawl of previous bids
    mapping(uint256 => AuctionItem) public idToAuctionItem;

    // Set to true at the end, stops any changes
    // Default: False

    // Events that will be emitted on changes.
    event HighestBidIncreased(address bidder, uint amount);
    event AuctionEnded(address winner, uint amount);

    /// The auction has already ended.
    error AuctionAlreadyEnded();
    /// There is already a higher or equal bid.
    error BidNotHighEnough(uint highestBid);
    /// The auction has not ended yet.
    error AuctionNotYetEnded();
    /// The function auctionEnd has already been called.
    error AuctionEndAlreadyCalled();

    event AuctionItemCreated(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool ended
    );


    function createAuctionItem(address _nftContract, uint256 _tokenId, uint128 _price, uint256 _timeoutPeriod) public payable nonReentrant {
        require(_price > 0, 'Price must be at least 1 wei');

        _itemIds.increment();
        uint256 itemId = _itemIds.current();

        idToAuctionItem[itemId] = AuctionItem(
            itemId,
             _nftContract,
            _tokenId,
            payable(msg.sender),
            payable(address(0)),
            payable(address(0)),
            0,
            uint128(_price),
            block.timestamp + _timeoutPeriod,
            false
        );

        IERC721(_nftContract).transferFrom(msg.sender, address(this), _tokenId);

        emit AuctionItemCreated(itemId, _nftContract, _tokenId, msg.sender, address(0), _price, false);
    }

    /// Bid on the auction with the value sent
    // the value will be refuneded if the auction is not won.
    function bid(uint256 itemId ) public payable {
        AuctionItem storage auction = idToAuctionItem[itemId];
        // require(auction.seller != address(0));
        require(msg.value >= auction.price);

        // Revert call if bidding period is over
        if (block.timestamp > auction.endTime)
            revert AuctionAlreadyEnded();
        
        // If the bid is not higher send,
        // the money back
        if (msg.value <= auction.highestBid)
            revert BidNotHighEnough(auction.highestBid);
        
        if (auction.highestBid != 0) {
            pendingReturns[itemId][auction.highestBidder] += auction.highestBid;
        }
        auction.highestBidder = payable(msg.sender);
        auction.highestBid = msg.value;
        emit HighestBidIncreased(msg.sender, msg.value);
    }

    function withhdraw(uint256 itemId ) public returns (bool) {
        uint amount = pendingReturns[itemId][msg.sender];

        // It is important to set this to zero because the recipient
        // can call this function again as part of the receiving call
        // before `send` returns.
        if (amount > 0) {
            pendingReturns[itemId][msg.sender] = 0;
            if (!payable(msg.sender).send(amount)) {
                pendingReturns[itemId][msg.sender] = amount;
                return false;
            }
        }
            return true;
    }

    /// End the auction and send the highest bid
    /// to the beneficiary
    function auctionEnd(uint256 itemId) public {
        AuctionItem storage auction = idToAuctionItem[itemId];
        if (block.timestamp < auction.endTime)
            revert AuctionNotYetEnded();
        if (auction.ended)
            revert AuctionEndAlreadyCalled();

        // 2. Effects
        auction.ended = true;
        emit AuctionEnded(auction.highestBidder, auction.highestBid);

        // 3. Interaction
        auction.seller.transfer(auction.highestBid);
        payable(owner).transfer(listingPrice);
        IERC721(auction.nftContract).transferFrom(address(this), msg.sender, auction.tokenId);
        auction.owner = payable(msg.sender);
        _itemsSold.increment();
    }

        /* Returns the listing price of the contract */
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

      /* Returns all unsold market items */
    function fetchAuctionItems() public view returns (AuctionItem[] memory) {
        uint256 itemCount = _itemIds.current();
        uint256 unsoldItemCount = _itemIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        AuctionItem[] memory items = new AuctionItem[](unsoldItemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (idToAuctionItem[i + 1].owner == address(0)) {
                uint256 currentId = i + 1;
                AuctionItem storage currentItem = idToAuctionItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items that a user has purchased */
    function fetchMyNFTs() public view returns (AuctionItem[] memory) {
        uint256 totalItemCount = _itemIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToAuctionItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        AuctionItem[] memory items = new AuctionItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToAuctionItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                AuctionItem storage currentItem = idToAuctionItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items a user has created */
    function fetchItemsCreated() public view returns (AuctionItem[] memory) {
        uint256 totalItemCount = _itemIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToAuctionItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        AuctionItem[] memory items = new AuctionItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToAuctionItem[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;
                AuctionItem storage currentItem = idToAuctionItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

}