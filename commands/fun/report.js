const Discord = require("discord.js")

module.exports = {
    name : 'report',
    description : 'report !',
    category: 'fun',
    run : async(bot, message, args)=>{ 

 if(args[0] == "help"){
      message.reply("Usage: !report <reason> ");
      return;
    }   
    let rreason = args.join(" ").slice(0);

    let reportEmbed = new Discord.MessageEmbed()
    .setDescription("***LAPORAN FAIL RP***")
    .setColor('RED')
    
    .addField("User Yang Melaporkan", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.member.guild.channels.cache.find(channel => channel.name === "log_laporan_failrp");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
}
