const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!dab"){
        message.channel.send("https://tenor.com/vkuJ.gif") 
        console.log(message.author.username + " " + "a lancé la commande Dab sur le serveur " + message.guild.name)   
    }
}

module.exports.help = {
    name: "dab"
}


