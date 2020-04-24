const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!die"){
        message.channel.send("https://tenor.com/view/jojos-bizarre-adventure-milton-jojo-kicking-fight-gif-16647809") 
        console.log(message.author.username + " " + "a lancé la commande Die sur le serveur " + message.guild.name)   
    }
}

module.exports.help = {
    name: "die"
}
