const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!rekt"){
        message.channel.send("https://tenor.com/view/damage-thats-alot-of-damage-jon-tron-gif-13054497")
        console.log(message.author.username + " " + "a lancé la commande Rekt sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "rekt"
}