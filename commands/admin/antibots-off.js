const fs = require("fs");

let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file

exports.run = (client, message, args) => {
    if(!message.channel.guild) return message.reply('**Cette commande uniquement pour les serveurs**');
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("**DÃ©solÃ© mais vous n'avez pas la permission** `ADMINISTRATOR`" );
antibots[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**â Le AntiBots est __ððð__ !**`)
      fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
        if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
      });
      }


