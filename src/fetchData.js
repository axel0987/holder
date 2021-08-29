const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

exports.fetchData = async () => {
  try {
    let myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Authorization", "Bearer 70d4ef96-0cfc-4e8d-be5a-6e15569b40b4");

   let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.solanabeach.io/v1/token/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    let tokenData = await fetch(myheaders, requestOptions)
    

    let price = tokenData.ticker
    let symbol = tokenData.holders
    let circSupply = tokenData.supply

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}
