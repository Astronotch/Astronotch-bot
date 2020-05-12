const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!staline"){
        message.channel.send("https://tenor.com/view/sex-appeal-communism-stalin-gulag-gif-7561712")
        console.log(message.author.username + " " + "a lancé la commande Staline sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "staline"
}