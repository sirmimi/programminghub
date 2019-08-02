const Discord = require('discord.js');
const client = new Discord.Client();


console.log('The bot is working now ')

let channel = client.channels.get("585585535754567680")
        channel.createInvite({ maxUses: 1 })
        .then(invite => { message.channel.send(`https://discord.gg/${invite.code}`) })
    }





client.login('NTg2OTUzMTgxOTU5ODE1MTg3.XPvorg.Y5KQDpkDDS7zdwW0rFFfSmy5ROE')
