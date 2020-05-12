const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!yare"){
        message.channel.send("https://tenor.com/view/anime-jotaro-jjba-jojo-yare-gif-12243323")
        message.channel.send("YARE YARE DAZE")
        console.log(message.author.username + " " + "a lancé la commande Yare sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "yare"
}
