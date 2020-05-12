const Discord = require("discord.js")
  
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!hello"){
        message.channel.send("https://tenor.com/view/penguin-hello-hi-heythere-cutie-gif-3950966")
        console.log(message.author.username + " " + "a lancé la commande Hello sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "hello"
}