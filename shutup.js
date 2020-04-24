const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!shutup"){
        message.channel.send("https://tenor.com/view/jojo-shut-up-annoying-anime-jojos-bizarre-adventures-gif-16844947")
        console.log(message.author.username + " " + "a lancé la commande Shutup sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "shutup"
}