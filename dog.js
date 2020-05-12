const Discord = require("discord.js")
  
const colors = require("../colors.json")
const superagent = require("superagent")
 

module.exports.run = async (bot, message, args) => {
    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    //console.log(body.message)
    if(!{body}) return message.channel.send("Error 404 not found !")
    let Embed = new Discord.MessageEmbed()
    .setColor(colors.green_light)
    .setAuthor(`Astronotch !`, message.guild.iconURL)
    .setImage(body.message)
    .setTimestamp()
    .setFooter(`Bot de Hugreau`, bot.user.displayAvatarURL)
    message.channel.send(Embed).then(m => m.delete(5000))
    msg.delete()
    console.log(message.author.username + " " + "a lancé la commande Dog sur le serveur " + message.guild.name)
}

module.exports.help = {
    name: "dog"
}