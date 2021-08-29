const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

exports.fetchData = async () => {
  try {
    const url = 'https://api.solanabeach.io/v1/tokens/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3';

const options = {
  headers: {
    Authorization: 'Bearer 70d4ef96-0cfc-4e8d-be5a-6e15569b40b4'
  }
};

const res = await (await fetch(url, options)).json()

                   const price = res.priceDate.price
    const symbol = res.ticker
    const circSupply = res.holders
    const duaempat = res.priceData.percent_change_24h

    return { price, symbol, circSupply, duaempat }
  } catch (err) {
    console.log(err)
    return undefined
  }
}

                   

