const Discord = require("discord.js")
  
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!golden"){
        message.channel.send("https://www.youtube.com/watch?v=OugVczuA55s")
        console.log(message.author.username + " " + "a lancé la commande Golden sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "golden"
}