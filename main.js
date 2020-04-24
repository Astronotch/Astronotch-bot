const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("superagent")
const fs = require("fs");
const config = require("./config.json")
const colors = require("./colors.json")

bot.commands = new Discord.Collection() 

bot.login(config.token);

fs.readdir("./cmds/", (err, files) =>{
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Aucune commande trouvée.")
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require (`./cmds/${f}`);
        console.log(`${f} est présent sur le champ de bataille !`);
        bot.commands.set(props.help.name, props)
    })
})
 
bot.on("ready", async () => {
    console.log("  ")
    console.log("Commandes opérationelles, mon capitaine !");
    console.log("  ")
    console.log("Astronotch joined the battle !")
    console.log("  ");
    bot.user.setActivity("Jojo's Bizarre Adventure", {type: "WATCHING"})
});
 
 
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(prefix.length));
    if (commandFile) commandFile.run(bot, message, args)
});

bot.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(config.welcome).send('**' + member.user.username + '**, a rejoint notre magnifique serveur!https://tenor.com/view/penguin-hello-hi-heythere-cutie-gif-3950966');
})