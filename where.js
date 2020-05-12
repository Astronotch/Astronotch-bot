const Discord = require("discord.js")
  
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!where"){
        message.channel.send("https://tenor.com/view/travolta-gif-5291661")
        console.log(message.author.username + " " + "a lancé la commande Where sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "where"
}