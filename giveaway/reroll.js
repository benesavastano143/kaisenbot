const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Vous devez avoir la permissions de supprimer les message ou le role Giveways.');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Vous devez spécifié le bon ID du message!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('Je ne trouve pas le Giveways ayant cette ID :  `'+ args.join(' ') +'`.');
    }

    // Reroll the giveaway
    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        // Success message
        message.channel.send('Giveaway reroll !');
    })
    .catch((e) => {
        if(e.startsWith(`le Giveways  ${giveaway.messageID} n'est pas encore fini.`)){
            message.channel.send('Le Giveways est pas fini!');
        } else {
            console.error(e);
            message.channel.send('Une erreur est survenue...');
        }
    });

};