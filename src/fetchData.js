const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

exports.fetchData = async () => {
  try {
    let url = `https://api.solanabeach.io/v1/token/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3`;
  let settings = { 
    method: "GET",
    headers: {
      "X-API-KEY": "bearer 70d4ef96-0cfc-4e8d-be5a-6e15569b40b4"
    }
  };
    let res = await fetch(url, settings)
    if (res.status == 404 || res.status == 400)
  {
    throw new Error("Token id doesn't exist.");
  }
  if (res.status != 200)
  {
    throw new Error(`Couldn't retrieve metadata: ${res.statusText}`);
  }
    let tokenData = await res.json()


    let price = tokenData.ticker
    let symbol = tokenData.holders
    let circSupply = tokenData.supply

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}
