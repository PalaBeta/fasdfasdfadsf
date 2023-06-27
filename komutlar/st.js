const Discord = require("discord.js");
const db = require("nrc.db")
const {MessageActionRow, MessageButton} = require("discord.js")
module.exports = {
calistir: async(client, message, args) => {
	if (message.member.roles.cache.has("") || message.member.roles.cache.has("1105400827012714526")){
		if(!args[0]) return message.reply(":x: Duyuru içeriğinizi girin.");
	let mesaj = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);	
		const iemEmbed = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setTitle("PONET - Admin Duyuru")
		.setThumbnail("https://e7.pngegg.com/pngimages/166/90/png-clipart-computer-icons-user-setting-icon-miscellaneous-monochrome.png")
		.setDescription(mesaj)
		.setFooter({text: message.author.tag, iconURL: message.author.avatarURL({dynamic: true})})
		message.channel.send({content: "@everyone", embeds:[iemEmbed]})
		message.delete()
	}else return message.reply(":x: Yetkiniz yok.")
},

name: "st",
description: "",
aliases: [],
kategori: "",
usage: "",
}