import { GraphQLClient, gql } from 'graphql-request'

let subgraphendpoint = '';
import { subGraphTestnetEndpoint, subGraphMainnetEndpoint } from '../../../lib/constants';
if (process.env.SMART_CONTRACT_ENV == 'mainnet') {
    subgraphendpoint = subGraphMainnetEndpoint;
}
else {
    subgraphendpoint = subGraphTestnetEndpoint;
}

export default async (req, res) => {
  const graphQLClient = new GraphQLClient(subgraphendpoint, {
      headers: {
          authorization: process.env.THE_GRAPH_KEY,
      },
  })

  const {id} = req.query
  console.log(id)

  try {
    const query = `{
      highestBidIncreaseds(where: {tokenId: ${id}}) {
        id
        tokenId
        amount
        bidder
      }
    }`
  
  const data = await graphQLClient.request(query)
  res.status(200).json({data: data.highestBidIncreaseds})
  } catch (error) {
      throw new Error(error.message)
  }
}

