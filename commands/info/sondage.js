const Discord = require('discord.js');

module.exports.run = async (bot, message,  args) => {

        if(message.channel.type === "dm") return message.reply('Les commandes ne sont pas autorisées en mp')
      message.delete(400)
       if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas les permissions");
       var say = args.join(" ")
      
       let sondage = new Discord.MessageEmbed()
       
           .setTitle("Sondage ")
           .setAuthor(`${message.author.username}`, message.author.avatarURL)
           .setDescription(`${say} \n✅ pour oui | ❌ pour non`)
           .setColor("#ff0000")
      
       message.channel.send(sondage)
       .then(function(message) {
          setTimeout(() => { 
              message.react("✅") 
           }, 500) 
          setTimeout(() => { 
              message.react("❌") 
           }, 1000); 
           clearInterval(setTimeout);
       });
       message.delete() 
       console.log(message.author.username + " A lancée un sondage a 2 choix !")
    }
    module.exports.help = {
        name: "sondage"
    }