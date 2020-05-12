const Discord = require("discord.js")
  
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!yes"){
        message.channel.send("https://tenor.com/view/yes-jotaro-kujo-jojos-gif-7297252")
        console.log(message.author.username + " " + "a lancé la commande Yes sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "yes"
}