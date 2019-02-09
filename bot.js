const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543827657960325142")
setInterval(function() {
channel.send(`body we try`);
}, 30)
})

client.login("NTQzODI1MTMyNjM3MTI2NjU5.D0CMYA.ju9JHb1B3lwoCWmhfYbKrcfMnwY");
