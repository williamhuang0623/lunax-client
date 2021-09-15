This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Start Hardhat node

```
yarn hardhat node
```

## Import account into Metamask

1. Go to networks and select localhost:8545
2. Click account avatar in top right corner and select Import Account
3. Select a private key from the console where you ran ` yarn hardhat node` and paste into Metamask
4. Now click on settings in Metamask and select Networks then Add Network
5. Input the following data

Network Name: Mumbai TestNet
New RPC URL: https://rpc-mumbai.matic.today
Chain ID: 80001
Currency Symbol: Matic

6. Save this and you should be switched to the Polygon/Matic Mumbai Testnet
7. If you need some Matic tokens to interact you can visit https://faucet.matic.network/
   [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploying on-chain

Change network to mumbai for testnet or keep as matic for mainnet

```
yarn hardhat run scripts/deploy.js --network matic
```
Note: this will redeploy the contracts and the old contract addresses will be lost,
so if you are redeploying then cd into 'the-graph' for mainnet or 'the-graph-testnet' for testnet
and redeploy the graph to the right contract address by grabbing the auction contract address from your hardhat deploy,
and put into 'the-graph/subgraph.yaml' where it says address:

Lastly, change the graph endpoint in `lib/constants` to match new verison of subgraph

Go into .env and change SMART_CONTRACT_ENV to match desired chain(local, testnet, or mainnet)

Run the frontend
```
yarn dev
```

Finally, make sure to switch network in Metamask to match :)

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### How to use Prettier

First remember to run

```
npm install
```

**For VS Code**

1. Head to Code > Preferences > Extensions and search for the ESCode and Prettier extensions and install them.
2. Make a settings file at .vscode/settings.json and add the following configuration:

```

{
    "editor.formatOnSave": true,
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "diffEditor.ignoreTrimWhitespace": false,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

**For Atom**
Install the prettier-atom package.

Head to Packages > prettier and check "Format on Save" and "Format on Prettier Config" and then restart Atom.
