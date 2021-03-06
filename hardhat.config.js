require('@nomiclabs/hardhat-waffle');
require('hardhat-gas-reporter');
require('dotenv').config();
const privateKey = process.env.NEWKINO_PRIV_KEY.toString().trim() || '01234567890123456789';

module.exports = {
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {
            mining: {
                auto: true,
                interval: 5000,
            },
            chainId: 1337,
        },
        mumbai: {
            url: 'https://polygon-mumbai.infura.io/v3/b331fcdfec914408a07f98be92b3f9f2',
            accounts: [privateKey],
            gasPrice: 8000000000,
        },
        matic: {
            url: 'https://polygon-mainnet.infura.io/v3/b331fcdfec914408a07f98be92b3f9f2',
            accounts: [privateKey],
            gasPrice: 8000000000,
        },
    },
    mocha: {
        timeout: 50000,
    },
    solidity: {
        version: '0.8.4',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    gasReporter: {
        currency: 'USD',
        gasPrice: 21,
    },
};
