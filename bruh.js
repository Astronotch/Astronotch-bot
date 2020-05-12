const { Client, MessageAttachment } = require('discord.js');
const colors = require("../colors.json")
const client = new Client();
 

module.exports.run = async (bot, message, args) => {
    if (message.content === "!bruh") {
        const attachment = new MessageAttachment('image_son/bruh.mp3');
        message.channel.send(attachment)
        message.channel.send("https://tenor.com/view/disappointment-my-is-immeasurable-and-gif-14420754");
        console.log(message.author.username + " " + "a lancé la commande Bruh sur le serveur " + message.guild.name);
      }
    };
    

module.exports.help = {
    name: "bruh"
}
