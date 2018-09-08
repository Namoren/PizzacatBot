const Discord = require('Discord.js');
const client = new Discord.Client();

 
//ready event this will run whenever the bot start
client.on('ready', () => {
    console.log('Bot launched')
    client.user.setStatus('online');
    client.user.setActivity('Für Hilfe _help')
    });

//Discord login
client.login(process.env.BOT_TOKEN); // here is the token needed


