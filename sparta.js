const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!sparta"){
        message.channel.send("https://tenor.com/view/sparta-attack-kick-300-gif-4897846")
        console.log(message.author.username + " " + "a lancé la commande Sparta sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "sparta"
}