const Discord = require('discord.js');

module.exports.run = async (client, message,  args) => {

     let embed = new Discord.MessageEmbed()
      .setAuthor(`Panel HELP!`, message.guild.iconURL)
     .setColor('RANDOM')
      .setDescription(`<:emoji_55:707680883376783481> ${message.author.username} **veuiller Choisir la facon dont vous voulez que le panel help sois envoyer !**\n **<a:emoji_30:703304084412694678> k!dm : le panel help sera envoyer en message privé \n\n  <a:emoji_30:703304084412694678> k!now : le panel help sera envoyer sur le channel** !`)
      message.channel.send(embed)
}
    module.exports.help = {
        name: "help"
    }