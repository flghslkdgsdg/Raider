const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("509339999661981706")
setInterval(function() {
channel.send(`Free Credit??`);
}, 1)
})
 
 client.on("ready", () => {
let channel =     client.channels.get("509780281335480323")
setInterval(function() {
channel.send(`Free Credit?`);
}, 25)
})

client.on("ready", () => {
let channel =     client.channels.get("509782733518536737")
setInterval(function() {
channel.send(`Free Credit?`);
}, 25)
})
 
client.login("NDgzMjIxMjg3NTY5OTgxNDU4.DsS5Mg.sSk4VQnEHZj2YUfF89hMBcfbNiM");
