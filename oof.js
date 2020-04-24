const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!oof"){
        message.channel.send("https://tenor.com/view/sully-scared-gif-14201804")
        console.log(message.author.username + " " + "a lancé la commande Oof sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "oof"
}