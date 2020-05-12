const { Client, MessageAttachment } = require('discord.js');
const colors = require("../colors.json")
const client = new Client();
 

module.exports.run = async (bot, message, args) => {
    if (message.content === "!ctsur") {
        const attachment = new MessageAttachment('image_son/sardoche-cetait-sur.mp3');
        message.channel.send(attachment);
        console.log(message.author.username + " " + "a lancé la commande C'était sur sur le serveur " + message.guild.name);
      }
    };
    

module.exports.help = {
    name: "ctsur"
}
