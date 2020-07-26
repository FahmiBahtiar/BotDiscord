const {MessageEmbed} = require('discord.js');
module.exports={
    name :'ip',
    category :'fun',
    description : 'view a nice embed!',
    timeout : 20000,
    
    run : async(bot,message,args)=>{
        message.channel.send(`Sedang Mengupdate IP Server, Mohon Tunggu Sebentar....`).then(msg=>{
        const _ = new MessageEmbed()
        .setTitle('Falcon IP Information')
        .setColor('RANDOM')
        .setURL("https://falconroleplay.id/")
        .setDescription('Berikut Adalah IP Masuk Server Falcon Roleplay Indonesia')
        .setThumbnail("https://falconroleplay.id/img/falcon.png")
        .addFields(
            {name: '📶 IP Server :', value: "https://falconroleplay.id/connect", inline: false},
            {name: '📢 Team Speak :', value: "https://falconroleplay.id/ts", inline: false},
            {name: '🌐 Website :', value: "https://falconroleplay.id/", inline: false},
            
        )
        .setTimestamp()
        .setFooter('Falcon Roleplay Indonesia',`https://falconroleplay.id/img/falcon.png`)   
        msg.edit(_);
        msg.edit("\u200B")
        message.delete()

        
        })
        
    }
   
}