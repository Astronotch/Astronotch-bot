const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!fight"){
        message.channel.send("https://tenor.com/view/jotaro-dio-muda-ora-jjba-gif-5371460")
        message.channel.send("Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora")
        console.log(message.author.username + " " + "a lancé la commande Fight sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "fight"
}
