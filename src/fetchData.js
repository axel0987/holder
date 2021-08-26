const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

exports.fetchData = async () => {
  try {
    const token = await (
let options = {
  'method': 'GET',
  'url': 'https://api.solanabeach.io/v1/token/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3',
  'headers': {
    'accept': 'application/json',
    'Authorization': 'Bearer 70d4ef96-0cfc-4e8d-be5a-6e15569b40b4'
  }
});
const tokenadd = token
    
    const price = tokenadd.ticker
    const symbol = tokenadd.holders
    const circSupply = tokenadd.supply

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}
