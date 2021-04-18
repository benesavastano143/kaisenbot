const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {


  let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!member) return message.channel.send("**<:false:551460099600678944> Merci de mentionner un utilisateur.**");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:false:551460099600678944> **Vos permissions sont insuffisantes !**");
  let tmReason = args.join(" ").slice(22);
  if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:false:551460099600678944> **Je ne peut pas mute cette utilisateur.**");
  let muterole = message.guild.roles.cache.find(r => r.name === 'Mute');

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mute",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("<:false:551460099600678944> **Merci de choisir une durée !**");

  await(message.guild.member(member).roles.add(muterole.id));
  message.channel.send(`**<:true:551460100347396107> L'utilisateur <@${member.id}> viens d'être mute par ${message.author.tag} !**`);

  setTimeout(function(){
    member.removeRole(muterole.id);
    message.channel.send(`:pushpin: **L'utilisateur <@${member.id}> n'est plus mute !**`);
  }, ms(mutetime));
}