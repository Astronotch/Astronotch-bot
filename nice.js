const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!nice"){
        message.channel.send("https://tenor.com/view/joseph-joestar-nice-gif-7319727")
        console.log(message.author.username + " " + "a lancé la commande Nice sur le serveur " + message.guild.name)    }
}

module.exports.help = {
    name: "nice"
}
