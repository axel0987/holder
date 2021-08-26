const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

exports.fetchData = async () => {
  try {
    const tokendata = await (await fetch("https://api.solanabeach.io/v1/token/BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3", {
  headers: {
    Accept: "application/json",
    Authorization: "Bearer 70d4ef96-0cfc-4e8d-be5a-6e15569b40b4"
  }
};
  const price = tokendata.holders
  const symbol = tokendata.tickers
  const circsupply = tokendata.supply
tokendata(headers, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});
