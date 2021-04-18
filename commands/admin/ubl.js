/*  
const Discord = require("discord.js");
const fs = require('fs');
const config = require('../../config.json')

exports.run = async (client, message, args) => {
    let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    let user = args[0];
    if(message.author.id !== "314812085013970954") return message.channel.send(`${message.author}, Tu n'est pas Owner`);
    //if (user = "blacklist") return message.reply('You need to imput a User ID');
    if (!user) return message.reply('Vous devez imputer un ID utilisateur');
    
    if (!blacklist[user]) {
        message.reply("Cette utulisateur n'est pas dans la blacklist");
        return;
    };
    
    if (blacklist[user].state === false) {
        message.reply("Cette utulisateur n'est pas dans la blacklist");
        return;
    };

    if (blacklist[user].state === true) {
        blacklist[user] = {
            state: false
        }
    message.reply("a bien été retiré de la blacklist du bot !");
    fs.writeFile("./blacklist.json", JSON.stringify(blacklist), err => {
        if(err) throw err;
        return;
    });
    }
    
}
module.exports.help = {
    name: "ubl"
}
*/