const Discord = require("discord.js")
const colors = require("../colors.json")
 

module.exports.run = async (bot, message, args) => {
    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
        command = bot.commands.get(command)
        var SHembed = new Discord.RichEmbed()
        .setColor(colors.green_dark)
        .setAuthor(`Bot de Hugreau`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setDescription(`Le "!" pour le bot est: \`!\`\n\n`)
        message.channel.send(SHembed);
    }}

    if(!args[0]) {

        let Sembed = new Discord.MessageEmbed()
        .setColor(colors.perfect_blue)
        .setAuthor(`Bot de Hugreau !`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`Commands are only available for this bot !\nThe bot prefix is: \`!\` \nThe profile pics of the bot isn't mine ! `)
        .addField("**__All commands__** :", "``ban`` ``bruh`` ``cat`` ``clear`` ``dance`` ``die`` ``dio`` ``dog`` ``doubt`` ``dream`` ``end`` ``ez`` ``fight`` ``gay`` ``giograsse``  ``golden`` ``goodbye`` ``help`` ``hmm`` ``refuse`` ``illegal`` ``image`` ``jotaro`` ``kick`` ``marrant`` ``mort`` ``marioof`` ``minecrooft`` ``mothafucka`` ``nice`` ``no`` ``non`` ``omg`` ``okay`` ``okey`` ``oof`` ``ping`` ``rekt`` ``report`` ``run`` ``serverinfo`` ``shutup`` ``sparta`` ``staline`` ``trash`` ``troll`` ``tea`` ``usa`` ``userinfo`` ``uwu`` ``vodka`` ``wait`` ``welcome`` ``yare`` ``yes`` ``you`` ``zawarudo``")
        .addField("*Jojo's commands*:","``dance`` ``die`` ``dio`` ``dream`` ``end`` ``fight`` ``giograsse`` ``golden`` ``hmm`` ``refuse`` ``jotaro`` ``nice`` ``no`` ``omg`` ``run`` ``shutup`` ``tea`` ``yare`` ``yes`` ``you`` ``zawarudo``")
        .addField("*Meme's commands*:","``bruh`` ``cat`` ``dog`` ``doubt`` ``ez`` ``gay`` ``goodbye`` ``illegal`` ``image`` ``marrant`` ``marioof`` ``minecrooft`` ``mort`` ``mothafucka`` ``non`` ``okay`` ``okey`` ``oof`` ``rekt`` ``report`` ``sparta`` ``staline`` ``trash`` ``troll`` ``usa`` ``uwu`` ``vodka`` ``wait`` ``welcome``")
        .addField("*Moderation's commands*:","``ban`` ``clear`` ``help`` ``kick`` ``ping`` ``serverinfo`` ``userinfo``")
        .addField("French meme's commands:","``marrant`` ``non`` ``report``")
        .setFooter("Astronotch", bot.user.displayAvatarURL({ format: "png", dynamic: true }))
        message.channel.send(Sembed)
        console.log(message.author.username + " " + "a lancé la commande Help sur le serveur " + message.guild.name)
    }
}

module.exports.help = {
    name: "help"
}