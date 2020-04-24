const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!uwu"){
        message.channel.send("https://tenor.com/view/egoz-uwu-uwu-army-dance-party-gif-15090789")
        console.log(message.author.username + " " + "a lancé la commande Uwu sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "uwu"
}