const token = process.env['token']
var CLIENT_ID = process.env["CLIENT_ID"]
var GUILD_ID = process.env["GUILD_ID"]

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

  else if (interaction.commandName === 'hello') {
    await interaction.reply('hi!');
  }

});

client.login(token);