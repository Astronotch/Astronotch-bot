const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!no"){
        message.channel.send("https://tenor.com/view/no-jojo-jotaro-kujo-anime-gif-11127067")
        console.log(message.author.username + " " + "a lancé la commande No sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "no"
}