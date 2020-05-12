const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!end"){
        message.channel.send("https://tenor.com/view/end-thats-all-folks-gif-10601784")
        console.log(message.author.username + " " + "a lancé la commande End sur le serveur " + message.guild.name)    }
}

module.exports.help = {
    name: "end"
}