const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()
const data = fetch("https://api.solanabeach.io/v1/token/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3", {
  headers: {
    Accept: "application/json",
    Authorization: "Bearer 70d4ef96-0cfc-4e8d-be5a-6e15569b40b4"
  }
})
const {nameapi} = data
exports.fetchData = async () => {
  try {
    const tokenData = nameapi

    const price = tokenData()
    const symbol = tokenData()
    const circSupply = tokenData()

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}
