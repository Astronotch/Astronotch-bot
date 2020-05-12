const Discord = require("discord.js")
  ;
const colors = require("../colors.json");


module.exports.run = async (bot, message, args) => {
    if(!message.guild)return
    if(message.content === "!jotaro"){
        message.channel.send("https://tenor.com/view/jotaro-jojo-gif-5024129")
        message.channel.send("Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora OraOra Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora Ora")
        console.log(message.author.username + " " + "a lancé la commande Jotaro sur le serveur " + message.guild.name)
    }}

module.exports.help = {
    name : "jotaro"
}
