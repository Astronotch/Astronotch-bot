const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!okey"){
        message.channel.send("https://tenor.com/view/yes-dog-indeed-nod-gif-10818519")
        console.log(message.author.username + " " + "a lancé la commande Okey sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "okey"
}