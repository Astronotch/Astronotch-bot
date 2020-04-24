const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!ez"){
        message.channel.send("https://tenor.com/view/tobey-maguire-spider-man-dance-nice-gif-14997395")
        console.log(message.author.username + " " + "a lancé la commande Ez sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "ez"
}