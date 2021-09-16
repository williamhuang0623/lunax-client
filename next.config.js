// next.config.js
require('dotenv').config();

module.exports = {
    images: {
        domains: ['newkino-client.s3.amazonaws.com'],
    },
    env: {
        SMART_CONTRACT_ENV: process.env.SMART_CONTRACT_ENV,
    },
};
