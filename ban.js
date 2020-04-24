const Discord = require("discord.js");
const colors = require("../colors.json");
var prefix = require("../config.json")
 
module.exports.run = async (bot, message, args) => {
    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('Vous n\'avez pas la permission !'); }
    if (!message.guild.member(bot.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('Le bot n\'a pas la permission !'); }
    if (message.mentions.users.size === 0) { return message.channel.send('Vous devez mentionner un utilisateur !'); }

        let banMember = message.guild.member(message.mentions.users.first());
        if (!banMember) { return message.channel.send('Je n\'ai pas trouvé l\'utilisateur !'); }
    
        message.mentions.users.first().send(`Vous êtes banni du serveur **${message.guild.name}** par ${message.author.username}`)
            .then(() => {
                banMember.ban()
                    .then((member) => {
                        message.channel.send(`${member.user.username} est ban ! Par ${message.author.username}`);
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
                .catch((error) => {
                    if (error) { console.error(error); }
                        banMember.ban()
                            .then((member) => {
                                message.channel.send(`${member.user.username} est ban ! Par ${message.author.username}`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
                console.log(message.author.username + " " + "a lancé la commande ban sur le serveur " + message.guild.name)
};

module.exports.help = {
    name: 'ban'
};