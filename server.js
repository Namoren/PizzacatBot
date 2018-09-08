const Discord = require('Discord.js');
const client = new Discord.Client();
const config = require("./config.json");

//Const Variables
const prefix = (config.prefix)
const ownerID = '142275441711906816'
const active = new Map(); 
 
//ready event this will run whenever the bot start
client.on('ready', () => {
    console.log('Bot launched')
    client.user.setStatus('online');
    client.user.setActivity('Für Hilfe _help')
    });

//Discord login
client.login(process.env.BOT_TOKEN); // here is the token needed


