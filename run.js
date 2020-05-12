const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!run"){
        message.channel.send("https://tenor.com/view/jojo-run-away-run-gif-15911437")
        console.log(message.author.username + " " + "a lancé la commande Run sur le serveur " + message.guild.name)    }
}

module.exports.help = {
    name: "run"
}
