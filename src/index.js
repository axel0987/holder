const { Client } = require('discord.js')
const dotenv = require('dotenv')

const { fetchData } = require('./fetchData')
const { numberWithCommas } = require('./utils')

dotenv.config()

const client = new Client()

// eslint-disable-next-line
client.on('ready', () => console.log(`Bot successfully started as ${client.user.tag} 🤖`))

// Updates token price on bot's nickname every X amount of time
client.setInterval(async () => {
  const data = await fetchData()

  if (!data) return

  const { prices, symbol, circSupply, duaempat, } = data

  client.guilds.cache.forEach(async (guild) => {
    const botMember = guild.me
    await botMember.setNickname(`$${symbol} HOLDER ${Number(circSupply)}`)
  })


  client.user.setActivity(
    `$${Number(price)}/(${Number(duaempat)}%)`,
    { type: 'PLAYING' },
  )
}, 1*60*60)

client.login(process.env.DISCORD_API_TOKEN)
