const { Client, MessageAttachment } = require('discord.js');
const colors = require("../colors.json")
const client = new Client();
 

module.exports.run = async (bot, message, args) => {
    if (message.content === "!kono_dio_da") {
        const attachment = new MessageAttachment('image_son/kono_dio_da.mp4');
        message.channel.send(attachment);
        console.log(message.author.username + " " + "a lancé la commande Kono Dio Da sur le serveur " + message.guild.name);
      }
    };
    

module.exports.help = {
    name: "kono_dio_da"
}
