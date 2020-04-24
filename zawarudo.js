const Discord = require("discord.js")
const colors = require("../colors.json")

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!" + "zawarudo"){
        message.channel.send("https://tenor.com/view/za-warudo-power-attack-gif-15487465")
        message.channel.send("ZAWARUDOOOOOO !")
        console.log(message.author.username + " " + "a lancé la commande Zawarudo sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "zawarudo"
}