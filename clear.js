const Discord = require("discord.js");
 

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('Vous n\'avez pas les permissions !'); }
    if (!args[0]) { return message.channel.send('Vous devez spécifier un nombre de messages à supprimer !'); }
    else if (isNaN(args[0])) { return message.channel.send('Veuillez spécifier un nombre !'); }
                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(`:wastebasket:| ***${messages.size}*** **messages ont été effacés de la surface de la Terre !**`);
            });
            console.log(message.author.username + " " + "a lancé la commande Clear sur le serveur " + message.guild.name)
};

module.exports.help = {
    name: 'clear'
};