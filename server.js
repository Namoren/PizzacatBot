const Discord = require('Discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const swearWords = ["pizza", "Pizza"];

//Const Variables
const prefix = (config.prefix)
const ownerID = '142275441711906816'
const active = new Map(); 
 

console.log(`Starting Bot`);

// Listener Events
client.on('message', message => {
      
    
    if (message.channel.type == "dm") return; // no direct messages
 
    
    if (message.content.startsWith("_")) {
        message.delete(5000);
    }
    if (message.content.startsWith("~")) {
        message.delete(5000);
    }
    if (message.content.startsWith(`Neu Geladen`)) {
       message.delete(5000);
    }
       
    // Variables
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    //return statments
    if (message.author.bot) return; //ignore bots

    if( swearWords.some(word => message.content.includes(word)) ) {
         message.channel.send("Hat hier jemand von Pizza geredet :eyes: ?");
  // Or just do message.delete();
}
   
    if (!message.content.startsWith(prefix)) return; // return message if not start with prefix
           
    // Command Handler
    try {

        //Bonus auto reloader (you should move this into its own command)
        delete require.cache[require.resolve(`./commands/${cmd}.js`)];

        //options
        let ops = {
            ownerID: ownerID,
            active: active
        }

        let commandFile = require(`./Commands/${cmd}.js`); //this will require a file in the command folder
        commandFile.run(client, message, args, ops);// this will pass three variables into the file
      

    } catch (e) { // this will catch all errors
        console.log(e.stack);
    }
    
});

//ready event this will run whenever the bot start
client.on('ready', () => {
    console.log('Bot launched')
    client.user.setStatus('online');
    client.user.setActivity('Für Hilfe _help')
    });

//Discord login
client.login(precess.env.BOT_TOKEN); // here is the token needed


