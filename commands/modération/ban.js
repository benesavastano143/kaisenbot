const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        var error_permissions = new Discord.MessageEmbed()
            .setDescription("<:false:551460099600678944> Vous ne disposez pas les permissions nécessaires pour bannir un utilisateur.")
            .setColor("#F43436")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("BAN_MEMBERS")) {
        const member = message.mentions.members.first();
        if (!member) return message.channel.send(":x: Merci de mentionner un utilisateur pour bannir.")
        member.ban().then(member => {

            let embed = new Discord.MessageEmbed()
            .setAuthor(`Modération`, message.guild.iconURL)
            .setThumbnail(client.user.displayAvatarURL)
            .setTimestamp()
            .setDescription(`:white_check_mark: L'utilisateur **${member.user.tag}** est désormais banni du serveur.`)
           .setColor('RANDOM')
            message.channel.send(embed)
    })
    }
    message.delete();
}

module.exports.help = {
    name: "ban"
}
