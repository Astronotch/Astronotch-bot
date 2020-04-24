const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    let aEmbed = new Discord.MessageEmbed()
        .setColor(colors.perfect_blue)
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Server's name:**", `${message.guild.name}`, true)
        .addField("**Master of the server:**", `${message.guild.owner}`, true)
        .addField("**Members count:**", `${message.guild.memberCount}`)
        .setFooter(`Bot créé par Hugreau comme l'eau`, bot.user.displayAvatarURL);
        message.channel.send(aEmbed)
        console.log(message.author.username + " " + "a lancé la commande Serverinfo sur le serveur " + message.guild.name )
}

module.exports.help = {
    name: "serverinfo"
}