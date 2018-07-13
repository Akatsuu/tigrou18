const Discord = require('discord.js');

var bot =  new Discord.Client();

bot.on('ready' , () => {
    bot.user.setPresence({ game: {name: 'tigrou.js', type: 0}});
    console.log('bot ready !');
  });
  
bot.login('NDUyMTU0NTg1NDMyMTk1MDcy.DfQU_g.9hhxD8bM8cGZPZsdkyFKr499Cd0');
