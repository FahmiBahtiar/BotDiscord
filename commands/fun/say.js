const Discord = require("discord.js");

module.exports={
    name: "say",
    description: "Get the bot to say what ever you want in a specific channel.",
    
    run: async(bot,message,args)=>{

  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Kamu Tidak Dapat Menggunakan Command Ini :v").then(m => m.delete(5000));
  let botmessage = args.join(" ");
  message.channel.send(botmessage);
  
}


}