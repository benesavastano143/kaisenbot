const Discord = require('discord.js');


module.exports.run = async (bot, message,  args) => {

let embed = new Discord.MessageEmbed()
.setTitle(`**Roles list du serveur**`)
.setDescription('```\n' + message.guild.roles.cache.map(r => r.name).join('\n') + '```')
.setImage('https://media.discordapp.net/attachments/658558014948638730/682185037809975302/roles.gif?width=400&height=267')
message.channel.send(embed)
}

module.exports.help = {
    name: "roles-list"
}