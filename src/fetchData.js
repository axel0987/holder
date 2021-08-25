const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

exports.fetchData = async () => {
  try {
    const tokenData = await (await fetch(`https://api.solanabeach.io/v1/token/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3`)).json()
  headers: {
    Accept: `application/json`,
    Authorization: `Bearer 70d4ef96-0cfc-4e8d-be5a-6e15569b40b4`
  }
})

    const price = tokenData.pricedata
    const symbol = tokenData.name
    const circSupply = tokenData.holders

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}
