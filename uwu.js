const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!uwu"){
        message.channel.send("https://tenor.com/view/uwu-anime-emoji-eyes-emote-gif-15264553")
        console.log(message.author.username + " " + "a lancé la commande Uwu sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "uwu"
}