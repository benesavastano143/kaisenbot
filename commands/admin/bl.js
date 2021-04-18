
const Discord = require("discord.js");
const fs = require('fs');


module.exports.run = async (client, message, args) => {
  if (!message.author.id === '314812085013970954') return message.reply("Tu doit étre owner...:facepalm:");
    //message.delete();
    let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    let user = args[0];
    const amount = parseInt(user);

    if (isNaN(amount)) {
        return message.reply('veuiller entré une ID valide');
    }
    if (!user) return message.reply('You need to imput a User ID');
    if (args[0] === '314812085013970954') return message.reply("Tu ne peut pas te blacklist , Dev:joy: ce monde est horrible.");

    if (!blacklist[user]) {
        blacklist[user] = {
          id: user,
          state: true
        }
        message.reply(`<@${user}> A été ajouté a la blacklist!`);    
        fs.writeFile("./blacklist.json", JSON.stringify(blacklist), err => {
            if(err) throw err;
          });
        
        client.guilds.cache.forEach((guild) => {
        if(guild.ownerID === user) {
          message.guild.leave(guild.id)
        }
    })

    return;
    }
    if (blacklist[user].state === true) {
        message.reply("Cette utilisateur est dans la blacklist du bot");
    return;
    };

}
module.exports.help = {
    name: "bl"
}
