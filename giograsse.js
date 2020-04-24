const { Client, MessageAttachment } = require('discord.js');
const colors = require("../colors.json")
const client = new Client();
 

module.exports.run = async (bot, message, args) => {
    if (message.content === '!giorgrasse') {
        const attachment = new MessageAttachment('image_son/giorno.jpg');
        message.channel.send(attachment);
        console.log(message.author.username + " " + "a lancé la commande Giorgrasse sur le serveur " + message.guild.name);
      }
    };
    

module.exports.help = {
    name: "giorgrasse"
}
