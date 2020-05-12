const Discord = require("discord.js")
  
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!goodbye"){
        message.channel.send("https://tenor.com/view/goodbye-homer-gif-10101012")
        console.log(message.author.username + " " + "a lancé la commande Goodbye sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "goodbye"
}
