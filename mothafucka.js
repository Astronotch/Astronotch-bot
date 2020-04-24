const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!mothafucka"){
        message.channel.send("https://tenor.com/view/hitmans-bodyguard-hitmans-bodyguard-gifs-samuel-ljackson-time-tick-tock-gif-8352665")
        console.log(message.author.username + " " + "a lancé la commande Mothafucka sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "mothafucka"
}