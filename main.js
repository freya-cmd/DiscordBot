const Discord = require('discord.js');

const client = new Discord.Client();


const prefix = '-';

client.once('ready', () => {
    console.log('FreyBot is up!')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command === "help") {
        message.channel.send('There is no help function yet since I am still writing this bot');
    }
});

client.login('Token not pasted here since its being shared on github');
