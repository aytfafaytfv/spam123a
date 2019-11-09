const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("642799355539095563")
setInterval(function() {
channel.send(`Spam by Fareseslam Or Evil ARE back`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
