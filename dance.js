const Discord = require("discord.js")
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!dance"){
        message.channel.send("https://tenor.com/view/gang-dance-jojos-bizarre-adventure-gif-13275596")
        console.log(message.author.username + " " + "a lancé la commande Dance sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "dance"
}