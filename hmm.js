const Discord = require("discord.js")
  
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!hmm"){
        message.channel.send("https://tenor.com/view/nani-jojo-gif-9845045")
        console.log(message.author.username + " " + "a lancé la commande Hmm sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "hmm"
}