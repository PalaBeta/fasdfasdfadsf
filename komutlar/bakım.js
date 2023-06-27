const Discord = require("discord.js");
const db = require("nrc.db")
const {MessageActionRow, MessageButton} = require("discord.js")
module.exports = {
    calistir: async(client, message, args) => {
        if(message.author.id !== "1065880112299520030"|| message.author.id == "885162537400803378"|| message.author.id == "781619654292406274"){
           
              return message.reply("sen kullanaman essek");
        } else {
    const aktifEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("**Sunucumuz Kısa Süreliğine Bakım Moduna Alınmıştır. Sizlere daha iyi bir hizmet verebilmek için çalışıyoruz...**")
        .setThumbnail(client.user.avatarURL({dynamic: true, type: 'png'}))
        .setImage("https://cdn.discordapp.com/attachments/1104864269339725865/1106298754484678736/FOREVERBEST1.png")
        .setTimestamp()
        message.channel.send({content: "||@everyone||", embeds: [aktifEmbed]})
}    
},

name: "bakım",
description: "",
aliases: [],
kategori: "",
usage: "",
}