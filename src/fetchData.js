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


    let price = tokenData.ticker
    let symbol = tokenData.holders
    let circSupply = tokenData.supply

    return Number{ price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}
