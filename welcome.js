const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!welcome"){
        message.channel.send("https://tenor.com/view/filthy-frank-papa-franku-rice-gif-5240504")
        console.log(message.author.username + " " + "a lancé la commande Welcome sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "welcome"
}