const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!wait"){
        message.channel.send("https://tenor.com/view/wait-what-meme-wait-aminute-gif-14484132")
        console.log(message.author.username + " " + "a lancé la commande Wait sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "wait"
}