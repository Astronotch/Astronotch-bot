const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!vodka"){
        message.channel.send("https://tenor.com/view/fun-fu-fiesta-guy-slavs-gif-5434524")
        console.log(message.author.username + " " + "a lancé la commande Vodka sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "vodka"
}