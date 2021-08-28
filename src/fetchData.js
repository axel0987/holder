const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()
const fetchFloor = async () => {
  let tokenId = await cache.get("SampleTokenId", fetchTokenId, 0)

  let url = `https://api.solanabeach.io/v1/token/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3`;
  let settings = { 
    method: "GET",
    headers: {
      "X-API-KEY": process.env.API_KEY
    }
  };
exports.fetchData = async () => {
  try {
    let tokenData = await fetch(url, settings);
    const {price = tokenData

    const price = tokenData.ticker
    const symbol = tokenData.symbol
    const circSupply = tokenData.supply

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}
