const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527501527418535938")
setInterval(function() {
channel.send(`dhdjkdksjfjsjsjkadd d d dksks d skkdkkskd dkdkd`);
}, 30)
})

client.login(process.env.BOT_TOKEN);