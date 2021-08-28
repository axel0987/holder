const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()
let url = `https://api.solanabeach.io/v1/token/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3`;
  let settings = { 
    method: "GET",
    headers: {
      "X-API-KEY": process.env.API_KEY
    }
  };
exports.fetchData = async () => {
  try {
    let res = await fetch(url, settings)
    let tokenData = await res.json()


    const price = tokenData.ticker
    const symbol = tokenData.holders
    const circSupply = tokenData.supply

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}
