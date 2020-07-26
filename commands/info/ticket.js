const discord = require("discord.js");

module.exports={
    name: "ticket",
    category: "info",
    description: "Get the oldest account creation date in the guild!",
    run: async(client, message, args) => {
      
        const categoryID = "718802789287067689";
        var userName = message.author.username;
        var userDiscriminator = message.author.discriminator;

        var ticketBestaat = false;

        message.guild.channels.cache.forEach(channel => {
            if(channel.name == userName.toLowerCase() +"-"+ userDiscriminator) {
                ticketBestaat = true;

                message.reply("Ticket Sudah Di Buat, Silahkan Lihat Lagi Tiketnya Di Category **TIKET**");

                return;
        }
            
        });
        
        if (ticketBestaat) return;
        //embed buat user
        var embed = new discord.MessageEmbed()
        .setTitle("Hai " + message.author.username)
        .setDescription("Anda Sudah Di Buatkan Channel Khusus Untuk Berkomunikasi Private Dengan Admin / Customer Service")
        .setFooter("Falcon Ticket");
        message.delete()
        message.author.send(embed)
        
        //embed buat admin
        var embedadmin = new discord.MessageEmbed()
        .setTitle("Assalamualaikum **Admin Dan Customer Service**")
        .setDescription(`
        User ***${message.author.username}*** 
        Sedang Menunggu Respon Private Kalian. Harap Layani Dengan Baik `)
        .setFooter("Falcon Ticket");
        
        // Channel voor logging
        
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "log-ticket");
        if (!ticketChannel) return message.reply("Thanks");

        ticketChannel.send(embedadmin);

        
        message.guild.channels.create(userName.toLowerCase() +"-"+ userDiscriminator, {type: 'text'}).then(
            (createdChannel) => {
                createdChannel.setParent(categoryID).then(
                    (settedParent) => {

                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false
                        });
                        settedParent.updateOverwrite(message.guild.roles.cache.find(y => y.id === '708405599431557120'),{
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true
                        });
                        settedParent.updateOverwrite(message.author.id, {
                            CREATE_INSTANT_INVITE:false,
                            READ_MESSAGES:true,
                            SEND_MESSAGES : true,
                            ATTACH_FILES : true,
                            CONNECT : true,
                            ADD_REACTIONS : true,
                            READ_MESSAGE_HISTORY : true                        
                        });
                        
                        var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hai ${message.author.username}`)
                        .setDescription(
                      "Silahkan Masukkan Keluhan Anda Kepada Admin / Customer Service Secara Private. Jika Ingin Mengakhiri Sesi Ticket Ini Bisa Ketikkan ``fa!close``");

                        settedParent.send(embedParent);
                        

                    }
                ).catch(err => {
                    message.channel.send("Error gan");
                });
            }
        ).catch(err => {
            message.channel.send("Error guan");
        })


    }
}