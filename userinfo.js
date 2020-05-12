const Discord = require("discord.js")
  
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    let zEmbed = new Discord.MessageEmbed()
        .setColor(colors.perfect_blue)
        .setTitle("USer Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
        .addField("**Pseudo:**", `${message.author.username}`, true)
        .addField("**Discriminator:**", `${message.author.discriminator}`, true)
        .addField("**ID**", `${message.author.id}`)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Created:**", message.author.createdAt)
        .setFooter(`Bot créé par Hugreau comme l'eau`, bot.user.displayAvatarURL);
        message.channel.send(zEmbed)
        console.log(message.author.username + " " + "a lancé la commande Userinfo sur le serveur " + message.guild.name)
}

module.exports.help = {
    name: "userinfo"
}