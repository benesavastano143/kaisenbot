const Discord = require('discord.js');
module.exports.run = async (client, message,  args) => {

const embed = new Discord.MessageEmbed()
.setTitle('Règlement du Serveur')

.setDescription(
`🧨  __**Pseudonymes et avatars**__ :

⚒️ Les photos de profils racistes, religieuses, ou à image pornographique est lourdement sanctionné.

⚒️ L'usurpation d'identité virtuelle est interdite, que ce soit un membre du staff, ou de quelqu'un en général.

⚒️ Les pseudonymes devront être facilement accessible à la mention pour que cela soit plus agréable.

⚒️ Ils devront respecter quelconque personne à son égard, devra être mis en avant. ( Critique religieuse, propos discriminatoire, autres )

⚒️ Les pseudos, avatars qui ont pour but de faire de la publicité sont interdites.

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🛡️  __**Les salons vocaux**__ :

⚒️ Les connexions vocales qui ont pour but de provoquer ou d'insulter un membre seront sanctionnés si nous disposons des preuves nécessaires.

⚒️ Les menaces de DDOS, Hack ou autre concernant ce sujet est bannissable si nous disposons des preuves nécessaires. ( Rekt, présence d'un Haut Staff )

⚒️ Il est strictement interdit de FLOOD vocal, ou autres. ( Déco-reco plusieurs fois à la suite, sounboard, abuser de ses permissions. )

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🔐 __**Les salons écrits**__ :

⚒️ Le FLOOD ou le SPAM est sanctionné d'un kick, voir ban selon la gravité par un bot discord.

⚒️ Il est interdit d'insulter, ou de manquer de respect à qui que ce soit.

⚒️ Tout message poster à l'aide de votre compte sera impardonnable, vous en êtes l'unique et seul responsable.

⚒️ Tout type de vente sur le serveur est interdite dès lors que vous avez passé la vérification du serveur.

⚒️ Il est obligatoire de respecter les thématiques des salons proposé.

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
:advertissement: __**Les Sanctions**__ :

⚒️ Vous êtes passible d'un avertissement si ce règlement n'est pas correctement suivi.

⚒️ Si vous êtes trop averti par la modération du discord, vous risquez un bannissement définitif.`)
.setFooter('Copyright By Béné')
message.channel.send(embed)

}
module.exports.help = {
    name: "help"
}