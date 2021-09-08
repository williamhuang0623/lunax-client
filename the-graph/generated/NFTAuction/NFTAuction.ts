// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AuctionEnded extends ethereum.Event {
  get params(): AuctionEnded__Params {
    return new AuctionEnded__Params(this);
  }
}

export class AuctionEnded__Params {
  _event: AuctionEnded;

  constructor(event: AuctionEnded) {
    this._event = event;
  }

  get winner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class AuctionItemCreated extends ethereum.Event {
  get params(): AuctionItemCreated__Params {
    return new AuctionItemCreated__Params(this);
  }
}

export class AuctionItemCreated__Params {
  _event: AuctionItemCreated;

  constructor(event: AuctionItemCreated) {
    this._event = event;
  }

  get itemId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get ended(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }
}

export class HighestBidIncreased extends ethereum.Event {
  get params(): HighestBidIncreased__Params {
    return new HighestBidIncreased__Params(this);
  }
}

export class HighestBidIncreased__Params {
  _event: HighestBidIncreased;

  constructor(event: HighestBidIncreased) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get bidder(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class NFTAuction__fetchAuctionItemsResultValue0Struct extends ethereum.Tuple {
  get itemId(): BigInt {
    return this[0].toBigInt();
  }

  get nftContract(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get seller(): Address {
    return this[3].toAddress();
  }

  get owner(): Address {
    return this[4].toAddress();
  }

  get highestBidder(): Address {
    return this[5].toAddress();
  }

  get highestBid(): BigInt {
    return this[6].toBigInt();
  }

  get price(): BigInt {
    return this[7].toBigInt();
  }

  get endTime(): BigInt {
    return this[8].toBigInt();
  }

  get ended(): boolean {
    return this[9].toBoolean();
  }
}

export class NFTAuction__fetchItemsCreatedResultValue0Struct extends ethereum.Tuple {
  get itemId(): BigInt {
    return this[0].toBigInt();
  }

  get nftContract(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get seller(): Address {
    return this[3].toAddress();
  }

  get owner(): Address {
    return this[4].toAddress();
  }

  get highestBidder(): Address {
    return this[5].toAddress();
  }

  get highestBid(): BigInt {
    return this[6].toBigInt();
  }

  get price(): BigInt {
    return this[7].toBigInt();
  }

  get endTime(): BigInt {
    return this[8].toBigInt();
  }

  get ended(): boolean {
    return this[9].toBoolean();
  }
}

export class NFTAuction__fetchMyNFTsResultValue0Struct extends ethereum.Tuple {
  get itemId(): BigInt {
    return this[0].toBigInt();
  }

  get nftContract(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get seller(): Address {
    return this[3].toAddress();
  }

  get owner(): Address {
    return this[4].toAddress();
  }

  get highestBidder(): Address {
    return this[5].toAddress();
  }

  get highestBid(): BigInt {
    return this[6].toBigInt();
  }

  get price(): BigInt {
    return this[7].toBigInt();
  }

  get endTime(): BigInt {
    return this[8].toBigInt();
  }

  get ended(): boolean {
    return this[9].toBoolean();
  }
}

export class NFTAuction__idToAuctionItemResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: Address;
  value4: Address;
  value5: Address;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: Address,
    value4: Address,
    value5: Address,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromBoolean(this.value9));
    return map;
  }
}

export class NFTAuction extends ethereum.SmartContract {
  static bind(address: Address): NFTAuction {
    return new NFTAuction("NFTAuction", address);
  }

  fetchAuctionItems(): Array<NFTAuction__fetchAuctionItemsResultValue0Struct> {
    let result = super.call(
      "fetchAuctionItems",
      "fetchAuctionItems():((uint256,address,uint256,address,address,address,uint256,uint256,uint256,bool)[])",
      []
    );

    return result[0].toTupleArray<
      NFTAuction__fetchAuctionItemsResultValue0Struct
    >();
  }

  try_fetchAuctionItems(): ethereum.CallResult<
    Array<NFTAuction__fetchAuctionItemsResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchAuctionItems",
      "fetchAuctionItems():((uint256,address,uint256,address,address,address,uint256,uint256,uint256,bool)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<NFTAuction__fetchAuctionItemsResultValue0Struct>()
    );
  }

  fetchItemsCreated(): Array<NFTAuction__fetchItemsCreatedResultValue0Struct> {
    let result = super.call(
      "fetchItemsCreated",
      "fetchItemsCreated():((uint256,address,uint256,address,address,address,uint256,uint256,uint256,bool)[])",
      []
    );

    return result[0].toTupleArray<
      NFTAuction__fetchItemsCreatedResultValue0Struct
    >();
  }

  try_fetchItemsCreated(): ethereum.CallResult<
    Array<NFTAuction__fetchItemsCreatedResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchItemsCreated",
      "fetchItemsCreated():((uint256,address,uint256,address,address,address,uint256,uint256,uint256,bool)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<NFTAuction__fetchItemsCreatedResultValue0Struct>()
    );
  }

  fetchMyNFTs(): Array<NFTAuction__fetchMyNFTsResultValue0Struct> {
    let result = super.call(
      "fetchMyNFTs",
      "fetchMyNFTs():((uint256,address,uint256,address,address,address,uint256,uint256,uint256,bool)[])",
      []
    );

    return result[0].toTupleArray<NFTAuction__fetchMyNFTsResultValue0Struct>();
  }

  try_fetchMyNFTs(): ethereum.CallResult<
    Array<NFTAuction__fetchMyNFTsResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchMyNFTs",
      "fetchMyNFTs():((uint256,address,uint256,address,address,address,uint256,uint256,uint256,bool)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<NFTAuction__fetchMyNFTsResultValue0Struct>()
    );
  }

  getListingPrice(): BigInt {
    let result = super.call(
      "getListingPrice",
      "getListingPrice():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getListingPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getListingPrice",
      "getListingPrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  idToAuctionItem(param0: BigInt): NFTAuction__idToAuctionItemResult {
    let result = super.call(
      "idToAuctionItem",
      "idToAuctionItem(uint256):(uint256,address,uint256,address,address,address,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new NFTAuction__idToAuctionItemResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toAddress(),
      result[5].toAddress(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBoolean()
    );
  }

  try_idToAuctionItem(
    param0: BigInt
  ): ethereum.CallResult<NFTAuction__idToAuctionItemResult> {
    let result = super.tryCall(
      "idToAuctionItem",
      "idToAuctionItem(uint256):(uint256,address,uint256,address,address,address,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NFTAuction__idToAuctionItemResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toAddress(),
        value[5].toAddress(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBoolean()
      )
    );
  }

  withhdraw(itemId: BigInt): boolean {
    let result = super.call("withhdraw", "withhdraw(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(itemId)
    ]);

    return result[0].toBoolean();
  }

  try_withhdraw(itemId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("withhdraw", "withhdraw(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(itemId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AuctionEndCall extends ethereum.Call {
  get inputs(): AuctionEndCall__Inputs {
    return new AuctionEndCall__Inputs(this);
  }

  get outputs(): AuctionEndCall__Outputs {
    return new AuctionEndCall__Outputs(this);
  }
}

export class AuctionEndCall__Inputs {
  _call: AuctionEndCall;

  constructor(call: AuctionEndCall) {
    this._call = call;
  }

  get itemId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AuctionEndCall__Outputs {
  _call: AuctionEndCall;

  constructor(call: AuctionEndCall) {
    this._call = call;
  }
}

export class BidCall extends ethereum.Call {
  get inputs(): BidCall__Inputs {
    return new BidCall__Inputs(this);
  }

  get outputs(): BidCall__Outputs {
    return new BidCall__Outputs(this);
  }
}

export class BidCall__Inputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }

  get itemId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BidCall__Outputs {
  _call: BidCall;

  constructor(call: BidCall) {
    this._call = call;
  }
}

export class CreateAuctionItemCall extends ethereum.Call {
  get inputs(): CreateAuctionItemCall__Inputs {
    return new CreateAuctionItemCall__Inputs(this);
  }

  get outputs(): CreateAuctionItemCall__Outputs {
    return new CreateAuctionItemCall__Outputs(this);
  }
}

export class CreateAuctionItemCall__Inputs {
  _call: CreateAuctionItemCall;

  constructor(call: CreateAuctionItemCall) {
    this._call = call;
  }

  get _nftContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _timeoutPeriod(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateAuctionItemCall__Outputs {
  _call: CreateAuctionItemCall;

  constructor(call: CreateAuctionItemCall) {
    this._call = call;
  }
}

export class WithhdrawCall extends ethereum.Call {
  get inputs(): WithhdrawCall__Inputs {
    return new WithhdrawCall__Inputs(this);
  }

  get outputs(): WithhdrawCall__Outputs {
    return new WithhdrawCall__Outputs(this);
  }
}

export class WithhdrawCall__Inputs {
  _call: WithhdrawCall;

  constructor(call: WithhdrawCall) {
    this._call = call;
  }

  get itemId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithhdrawCall__Outputs {
  _call: WithhdrawCall;

  constructor(call: WithhdrawCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
