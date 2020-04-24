const Discord = require("discord.js")
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!mort"){
        message.channel.send("https://tenor.com/view/coffin-dance-meme-man-men-african-ghana-africa-funeral-coffin-dance-meme-men-gif-16802144")
        message.channel.send("https://tenor.com/view/dancing-coffin-dancing-happy-fun-celebrating-gif-16728482")
        console.log(message.author.username + " " + "a lancé la commande Mort sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "mort"
}