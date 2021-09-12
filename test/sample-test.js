describe("NFTMarket", function () {
  it("Should create and execute market sales", async function () {
    /* deploy the marketplace */
    const Market = await ethers.getContractFactory("NFTMarket")
    const market = await Market.deploy()
    await market.deployed()
    const marketAddress = market.address

    /* deploy the Auction contract */
    const Auction = await ethers.getContractFactory("NFTAuction")
    const auction = await Auction.deploy()
    await auction.deployed()
    const auctionAddress = auction.address

    /* deploy the NFT contract */
    const NFT = await ethers.getContractFactory("NFT")
    const nft = await NFT.deploy(marketAddress, auctionAddress)
    await nft.deployed()
    const nftContractAddress = nft.address

    const marketPrice = ethers.utils.parseUnits('1', 'ether')
    const auctionPrice = ethers.utils.parseUnits('1', 'ether')

    /* create two tokens */
    await nft.createToken("https://www.mytokenlocation.com")
    await nft.createToken("https://www.mytokenlocation2.com")
    await nft.createToken("https://www.mytokenlocation3.com")


    // /* put both tokens for sale */
    await market.createMarketItem(nftContractAddress, 1, marketPrice)
    await market.createMarketItem(nftContractAddress, 2, marketPrice)

    /* put tokens on auction */
    await auction.createAuctionItem(nftContractAddress, 3, auctionPrice, 20000)

    const [_, buyerAddress] = await ethers.getSigners()

    /* execute sale of token to another user */
    await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, { value: marketPrice })

    /* Bid on auction */
    await auction.connect(buyerAddress).bid(1, { value: auctionPrice })
    await auction.connect(buyerAddress).bid(1, { value: auctionPrice + 1 })


    /* query for and return the unsold items */
    items = await market.fetchMarketItems()
    items = await Promise.all(items.map(async i => {
      const tokenUri = await nft.tokenURI(i.tokenId)
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item
    }))
    console.log('items: ', items)
  })
})