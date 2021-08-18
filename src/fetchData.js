const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

exports.fetchData = async () => {
  try {
    const tokenData = await (await fetch(`https://api.coingecko.com/api/v3/coins/${process.env.TOKEN_ID}`)).json()

    const price = tokenData.market_data.current_price.usd
    const symbol = tokenData.symbol.toUpperCase()
    const circSupply = tokenData.market_data.price_change_percentage=24

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}