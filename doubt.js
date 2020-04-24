const { Client, MessageAttachment } = require('discord.js');
const colors = require("../colors.json")
const client = new Client();
 

module.exports.run = async (bot, message, args) => {
    if (message.content === '!doubt') {
        const attachment = new MessageAttachment('image_son/Doubt.jpg');
        message.channel.send(`Press X for doubt,`, attachment);
        console.log(message.author.username + " " + "a lancé la commande Doubt sur le serveur " + message.guild.name);
      }
    };
    

module.exports.help = {
    name: "doubt"
}
