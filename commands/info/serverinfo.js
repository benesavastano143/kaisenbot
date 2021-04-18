const Discord = require('discord.js');
var moment = require('moment');

exports.run = (client, message, args) => {
    let botSize = message.guild.members.cache.filter(b => b.user.bot).size
    let userSize = message.guild.members.cache.size;
    let userSizenobot = userSize - botSize;

    var infodiscord = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .addField("📌 • __Propriétaire__ :", `${message.guild.owner.user}`, true)
        .addField("🌏 • __Région__ :", message.guild.region, true)
        .addField("📋 • __Channels__ :", `**${message.guild.channels.cache.size}** channels`, true)
        .addField(":members: > • __Utilisateurs :__ ", `**${userSizenobot}** utilisateurs`, true)
        .addField("🤖 • __Bots__ :", `**${botSize}** robots`, true)
        .addField("📄 • __ID__ :", message.guild.id, true)
        .addField("🔒 • __Niveau vérification__ :", `Niveau **${message.guild.verificationLevel}**`, true)
        .addField("<:stats:551484929742077952> • __Nombre de rôles__ :", `**${message.guild.roles.cache.size}** rôles`, true)
        .addField("🔧 • __Nombre d'émojis :__", `**${message.guild.emojis.cache.size}** émojis`, true)
        .addField("<:calendar:551484928307625986> • __Date de création__ :", `${moment(message.channel.guild.createdAt).format("LL")}`, true)
        .setColor("#8697CB")
    message.channel.send(infodiscord)
}

module.exports.help = {
    name: "infodiscord"
}