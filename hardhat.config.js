require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
<<<<<<< HEAD
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [privateKey],
      gasPrice: 8000000000
=======
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {
      url: "https://rpc-mainnet.matic.network",
      accounts: [privateKey]
>>>>>>> added polygon mainnet to config
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
