const { Client, MessageAttachment } = require('discord.js');
const colors = require("../colors.json")
const client = new Client();
 

module.exports.run = async (bot, message, args) => {
    if (message.content === "!marioof") {
        const attachment = new MessageAttachment('image_son/oof.mp3');
        message.channel.send(attachment);
        console.log(message.author.username + " " + "a lancé la commande Marioof sur le serveur " + message.guild.name)
      }
    };
    

module.exports.help = {
    name: "marioof"
}
