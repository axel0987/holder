const { Client } = require('discord.js')
const dotenv = require('dotenv')


const { numberWithCommas } = require('./utils')

dotenv.config()

const client = new Client()

// eslint-disable-next-line
client.on('ready', () => console.log(`Bot successfully started as ${client.user.tag} 🤖`))

// Updates token price on bot's nickname every X amount of time
client.setInterval(async () => {
  const request = require('request')
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
  client.guilds.cache.forEach(async (guild) => {
    const botMember = guild.me
    await botMember.setNickname(`$${tickers}`)
  })


  client.user.setActivity(
    `$${Number(holders)} / (${Number(supply)}%)`,
    { type: 'PLAYING' },
  )
}, 1*60*70)

client.login(process.env.DISCORD_API_TOKEN)
