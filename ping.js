const Discord = require('discord.js');
const prefix = require(`../config.json`);

module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('Ping')
        .then((m) => m.edit(`Pong : **${Date.now() - début}**ms`));
        console.log(message.author.username + " " + "a lancé la commande Ping sur le serveur " + message.guild.name)
};

module.exports.help = {
    name: 'ping'
};