const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!refuse"){
        message.channel.send("https://tenor.com/view/jojo-bizarre-adventure-irefuse-rohan-kishibe-anime-gif-16755634")
        console.log(message.author.username + " " + "a lancé la commande Refuse sur le serveur " + message.guild.name)    }
}

module.exports.help = {
    name: "refuse"
}
