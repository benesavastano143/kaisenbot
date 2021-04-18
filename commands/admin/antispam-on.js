const Discord = require('discord.js');
const fs = require('fs');
const emoji_1 = ":emoji_1:702225620888846456"
const config = require('../../config.json')
module.exports.run = async (client, message,  args) => {


    let sembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("📌 • __Anti-Spam__ :", "AntiSpam Activée 4 message maximum")
    .setImage(url="")
    .setTimestamp()
    .setFooter('Kaisen Bot',  client.user.displayAvatarURL)
      message.delete ()
 message.channel.send(sembed)
}
module.exports.help = {
 name: "verif"
}