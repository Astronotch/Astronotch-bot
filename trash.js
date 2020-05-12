
const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!trash"){
        message.channel.send("https://tenor.com/view/trash-know-your-place-gif-12886026")
        console.log(message.author.username + " " + "a lancé la commande Trash sur le serveur " + message.guild.name)    }
}

module.exports.help = {
    name: "trash"
}
