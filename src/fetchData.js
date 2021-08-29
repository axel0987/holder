const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()
let requestOptions = {
  method: 'GET',
  headers: 'application/json',
  Authorization: 'Bearer 70d4ef96-0cfc-4e8d-be5a-6e15569b40b4'
  }
exports.fetchData = async () => {
  try {
    const url = 'https://api.solanabeach.io/v1/token/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3';

const options = {
  headers: {
    Authorization: 'Bearer 70d4ef96-0cfc-4e8d-be5a-6e15569b40b4'
  }
};
    
    fetch(url, options)
  .then( res => res.json() )

    let price = fetch.ticker
    let symbol = fetch.holders
    let circSupply = fetch.supply

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}
