const discord = require("discord.js");

module.exports={
    name: "close",
    category: "info",
    description: "Get the oldest account creation date in the guild!",
    run: async(bot, message, args) => {

        const categoryID = "718802789287067689";
        if(message.channel.parentID ==  categoryID) {
            message.channel.delete();

            //create embed User.
            var embedCreateTicket = new discord.MessageEmbed()
            .setDescription("Ticket," + message.channel.name)
            .setDescription(`Thanks ${message.author.username} Ticket Di tutup`)
            .setFooter("Falcon Ticket");
            message.author.send(embedCreateTicket)

            //create embed Admin
            var embedadmin = new discord.MessageEmbed()
            .setDescription("Ticket," + message.channel.name)
            .setDescription(`
            User ***${message.author.username}*** Mengakhiri Ticket. 
            Thanks Admin / Customer Service Yang Sudah Ikut Membantu`)
            .setFooter("Falcon Ticket");

            // Channel voor logging
            var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "log-ticket");
            if (!ticketChannel) return message.reply("Thanks");

            ticketChannel.send(embedadmin);
        }else {

            message.channel.send(`Hai ${message.author.username}`)
        }


    }
}