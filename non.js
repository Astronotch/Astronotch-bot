const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!non"){
        message.channel.send("https://tenor.com/view/bonne-nuit-les-petits-bonne-nuit-les-petits-nounours-bonne-nuit-les-petits-en-fait-non-nounours-en-fait-non-en-fait-non-gif-15160176")
        console.log(message.author.username + " " + "a lancé la commande Non sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "non"
}