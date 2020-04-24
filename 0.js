const Discord = require("discord.js");
const colors = require("../colors.json");
var prefix = require("../config.json")

module.exports.run = (client, message, args) => {
    if(!message.guild)return
    if(message.content === "!test"){
        message.channel.send("test")    }
}

module.exports.help = {
    name: "test"
}