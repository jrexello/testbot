//Cargamos la librería de Discord.js
const Discord = require('discord.js');

//Este será el bot en sí.
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'culo') {
    message.reply('Me gustan grandes');
  }
});

client.login(process.env.TOKEN_BOT);

