const Discord = require("discord.js")
  ;
const colors = require("../colors.json");
 
 
module.exports.run = async (bot, message, args) => {
    if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.channel.send('https://tenor.com/view/nope-sponge-bob-icant-gif-6905756'); }
    if (!message.guild.member(bot.user).hasPermission('KICK_MEMBERS')) { return message.channel.send('Le bot n\'a pas la permission !'); }
    if (message.mentions.users.size === 0) { return message.channel.send('Vous devez mentionner un utilisateur !'); }

        let kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) { return message.channel.send('Je n\'ai pas trouvé l\'utilisateur !'); }
    
        message.mentions.users.first().send(`Bienvenue dans l'autre Monde, là où vous avez été kick du serveur **${message.guild.name}** par ce connard de ||${message.author.username}||. Ici tu devras essayer de survivre !`)
            .then(() => {
                message.channel.send("https://tenor.com/view/omaewamo-shindeiruken-gif-10814050")
                kickMember.kick()
                    .then((member) => {
                        message.channel.send(`${member.user.username} a été kick par ${message.author.username}`);
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
                .catch((error) => {
                    if (error) { console.error(error); }
                        kickMember.kick()
                            .then((member) => {
                                message.channel.send(`${member.user.username} a été kick Par ${member.user.username}`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
                console.log(message.author.username + " " + "a lancé la commande Kick sur le serveur " + message.guild.name)
};

module.exports.help = {
    name: 'kick'
};