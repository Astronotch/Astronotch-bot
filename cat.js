const Discord = require("discord.js")
const colors = require("../colors.json")
const superagent = require("superagent")
var prefix = require("../config.json")

module.exports.run = async (bot, message, args) => {
let msg = await message.channel.send("Je cherche...")
    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("Error 404 not found !")
 
    let Embed = new Discord.MessageEmbed()
    .setColor(colors.green_light)
    .setAuthor(`Astronotch !`, message.guild.iconURL)
    .setImage(body.file)
    .setTimestamp()
    .setFooter(`bot de Hugreau`, bot.user.displayAvatarURL)
    message.channel.send(Embed).then(m => m.delete(5000))
    msg.delete()
    console.log(message.author.username + " " + "a lancé la commande Cat sur le serveur " + message.guild.name)
}
 
module.exports.help = {
    name: "cat"
}