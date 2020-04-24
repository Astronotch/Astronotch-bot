const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!illegal"){
        message.channel.send("https://tenor.com/view/wait-thats-illegal-halo-meme-gif-14048618") 
        console.log(message.author.username + " " + "a lancé la commande Illegal sur le serveur " + message.guild.name)   }
}

module.exports.help = {
    name: "illegal"
}
