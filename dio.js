const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!dio"){
        message.channel.send("https://tenor.com/view/muda-the-world-punch-jo-jos-bizarre-adventure-gif-12851143")
        message.channel.send("Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda ")
        console.log(message.author.username + " " + "a lancé la commande Dio sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "dio"
}
