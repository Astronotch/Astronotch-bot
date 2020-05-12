const Discord = require("discord.js")
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!waiting"){
        message.channel.send("https://tenor.com/view/xaddd-gif-15606213")
        console.log(message.author.username + " " + "a lancé la commande Waiting sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "waiting"
}