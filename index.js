const Discord = require('discord.js');
const client = new Discord.Client();
const devs = "408611591710310410";

client.on('message', message => { 
        if(message.content.startsWith(prefix + 'dnd'))
        if(message.author.id !== devs) return;
        client.users.setStatus('dnd')
        message.chnanel.send(':white_check_mark:')
});



client.login('NTMzMzMzMTg5NjMzMTE0MTMy.XTuB8w.tCXjd8AE9UguG7vuLTe7Xrz05C0')
