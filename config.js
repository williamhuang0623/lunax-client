let nftaddress = "";
let nftauctionaddress = "";
let nftmarketaddress = "";
const smart_contract_env = "mainnet";

import { _nftmarketaddress_local, _nftauctionaddress_local, _nftaddress_local } from './local-config.js'
import { _nftmarketaddress_testnet, _nftauctionaddress_testnet, _nftaddress_testnet } from './testnet-config.js'
import { _nftmarketaddress_mainnet, _nftauctionaddress_mainnet, _nftaddress_mainnet } from './mainnet-config.js'

if (smart_contract_env == "local") {
    nftmarketaddress = _nftmarketaddress_local
    nftauctionaddress = _nftauctionaddress_local
    nftaddress = _nftaddress_local
}
else if (smart_contract_env == "testnet") {
    nftmarketaddress = _nftmarketaddress_testnet
    nftauctionaddress = _nftauctionaddress_testnet
    nftaddress = _nftaddress_testnet
}
else if (smart_contract_env == "mainnet") {
    nftmarketaddress = _nftmarketaddress_mainnet
    nftauctionaddress = _nftauctionaddress_mainnet
    nftaddress = _nftaddress_mainnet
}
else {
    console.log("WRONG/NULL SMART_CONTRACT_ENV!")
}
export {
    nftaddress,
    nftauctionaddress,
    nftmarketaddress
}