const Discord = require('discord.js');
const fs = require('fs');
const emoji_1 = ":emoji_1:702225620888846456"
const config = require('../../config.json')
module.exports.run = async (client, message,  args) => {


let commandes = args[0];
    let sembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Panel Commandes`, message.guild.iconURL)
    .setThumbnail(client.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(` **Menu des commandes** : \n **le prefix du bot et**: ` + config.prefix +  "\n**créé par**: " + config.owner + `\n**Version**: 1.2.0`  + `\n**nombre d'utilisateur en ligne**: ` + client.users.cache.size + `\n**nombre de serveurs**: ` + client.guilds.cache.size )
    .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬', "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")

    .addField(' Système Anti raid  ', "' ``anti-pub on``, ``anti-pub off``, ``anti-bot on``, ``anti-bot off``")    

    .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬', "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
    
    .addField(' Modération ', "' ``ban``, ``kick``, ``clear``, ``tempmute``, ``Nuke``")    

    .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬', "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")

    .addField(' Info ', "' ``help``, ``infobot``, ``reglement``, ``serverinfo``")    

    .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬', "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
    
    .addField(' Giveway ', "' ``start``, ``reroll``, ``end``")    

    .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬', "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")

    .setTimestamp()
      .setFooter('Krypto Bot',  client.user.displayAvatarURL)
      message.delete ()

      message.author.send(sembed).catch((e) => {
        message.channel.send("Vos Messages privée sont fermés, ouvrez les si vous voulez utiliser cette fonctionnalité ! ❌")  
})
}
module.exports.help = {
 name: "dm"
}
