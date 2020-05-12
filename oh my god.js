const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!omg"){
        message.channel.send("https://tenor.com/view/jojo-bizarre-joseph-ohmygod-gif-8313483")
        console.log(message.author.username + " " + "a lancé la commande Omg sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "omg"
}