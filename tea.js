const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!tea"){
        message.channel.send("https://tenor.com/view/giorno-giovanna-tea-piss-gif-14148345")
        console.log(message.author.username + " " + "a lancé la commande Tea sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "tea"
}