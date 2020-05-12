const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!usa"){
        message.channel.send("https://tenor.com/view/freedom-america-gif-14280685")
        console.log(message.author.username + " " + "a lancé la commande Usa sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "usa"
}