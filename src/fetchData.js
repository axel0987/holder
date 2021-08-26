const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

exports.fetchData = async () => {
  try {
    const request = require('request');
let options = {
  'method': 'GET',
  'url': 'https://api.solanabeach.io/v1/token/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3',
  'headers': {
    'accept': 'application/json',
    'Authorization': 'Bearer 70d4ef96-0cfc-4e8d-be5a-6e15569b40b4'
  }
};
request(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});

    const price = url.ticker
    const symbol = url.holders
    const circSupply = url.supply

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}
