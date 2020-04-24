
const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!troll"){
        message.channel.send("https://tenor.com/view/rick-astley-dancing-singin-rick-rolled-never-gonna-give-you-up-gif-7220603")
        console.log(message.author.username + " " + "a lancé la commande Troll sur le serveur " + message.guild.name)    }
}

module.exports.help = {
    name: "troll"
}
