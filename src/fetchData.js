const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

exports.fetchData = async () => {
  try {
    const token = await (await fetch(`https://api.solanabeach.io/v1/token/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3`)).json()
    const http = {
      headers : (
        Authentication = 'Bearer 70d4ef96-0cfc-4e8d-be5a-6e15569b40b4')
      })
      const {token, http} = tokendata












    const price = tokenData.ticker
    const symbol = tokenData.tickers
    const circSupply = tokenData.holders

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}
