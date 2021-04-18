const Discord = require('discord.js');
const fs = require('fs');
const emoji_1 = ":emoji_1:702225620888846456"
const config = require('../../config.json')
module.exports.run = async (client, message,  args) => {


    let sembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("📌 • __Vérification__ :", "Afin d'accéder aux salons, veuillez cliquer sur la réaction ci-dessous mais avant ça : \n Ce n'est pas une communauté MC, Gaming ou j'sais pas quoi mais une communauté de Clash Française.  \n Ne viens pas en mode J'vais vous niquer vos mères les kaisens pour repartir en disant Ouais j'trollais seulement espèce de mongole.  \n Maintenant que tu sais tout ça, tu peux désormais rejoindre le serveur, bonne continuation ")
    .setImage(url="https://thumbs.gfycat.com/ComplexDearBeardedcollie-small.gif")
    .setTimestamp()
    .setFooter('Signé, Kaisen. | Kaisen 2021™ Grosse team et commauté de clash sa mère. On vous enc*le vos soeurs les trolleurs et les bouffons de merde.',  client.user.displayAvatarURL)
      message.delete ()
 message.channel.send(sembed)
}
module.exports.help = {
 name: "verif"
}