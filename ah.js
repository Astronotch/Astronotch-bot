const { Client, MessageAttachment } = require('discord.js');
const colors = require("../colors.json")
const client = new Client();
 

module.exports.run = async (bot, message, args) => {
    if (message.content === "!ah") {
        const attachment = new MessageAttachment('image_son/denis-brogniart-ah.mp3');
        message.channel.send(attachment);
        console.log(message.author.username + " " + "a lancé la commande Ah sur sur le serveur " + message.guild.name);
      }
    };
    

module.exports.help = {
    name: "ah"
}
