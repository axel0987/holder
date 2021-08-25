const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()
const nameapi = fetch("https://api.solanabeach.io/v1/token/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3", {
  headers: {
    Accept: "application/json",
    Authorization: "Bearer 70d4ef96-0cfc-4e8d-be5a-6e15569b40b4"
  }
})
exports.fetchData = async () => {
  try {
    const tokenData = await (await fetch(`nameapi`)).json()

    const price = tokenData.tickers
    const symbol = tokenData.price
    const circSupply = tokenData.supply

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}
