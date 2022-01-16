const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

var CLIENT_ID = process.env["CLIENT_ID"]
var GUILD_ID = process.env["GUILD_ID"]
var token = process.env["token"]
const commands = [{
  name: 'hello',
  description: 'Replies with Hi!'
}]; 

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

	// await rest.put(
    //   Routes.applicationCommands(CLIENT_ID),
    //   { body: commands },
    // );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();