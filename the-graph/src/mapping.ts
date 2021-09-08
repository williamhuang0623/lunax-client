import {
  AuctionEnded as AuctionEndedEvent,
  AuctionItemCreated as AuctionItemCreatedEvent,
  HighestBidIncreased as HighestBidIncreasedEvent
} from "../generated/NFTAuction/NFTAuction"
import {
  AuctionEnded,
  AuctionItemCreated,
  HighestBidIncreased
} from "../generated/schema"

export function handleAuctionEnded(event: AuctionEndedEvent): void {
  let entity = new AuctionEnded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.winner = event.params.winner
  entity.amount = event.params.amount
  entity.save()
}

export function handleAuctionItemCreated(event: AuctionItemCreatedEvent): void {
  let entity = new AuctionItemCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.itemId = event.params.itemId
  entity.nftContract = event.params.nftContract
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.owner = event.params.owner
  entity.price = event.params.price
  entity.ended = event.params.ended
  entity.save()
}

export function handleHighestBidIncreased(
  event: HighestBidIncreasedEvent
): void {
  let entity = new HighestBidIncreased(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.bidder = event.params.bidder
  entity.amount = event.params.amount
  entity.save()
}
