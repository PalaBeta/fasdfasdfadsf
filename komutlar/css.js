const Discord = require("discord.js");
const db = require("nrc.db")
const {MessageActionRow, MessageButton} = require("discord.js")
module.exports = {
calistir: async(client, message, args) => {
	if (message.member.roles.cache.has("") || message.member.permissions.has("ADMINISTRATOR")){
		if(!args[0]) return message.reply(":x: Duyuru içeriğinizi girin.");
	let mesaj = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);	
		const iemEmbed = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setTitle("CSS")
		.setThumbnail("https://i.hizliresim.com/kusq4at.png")
		.setDescription(mesaj)
		.setFooter({text: message.author.tag, iconURL: message.author.avatarURL({dynamic: true})})
		message.channel.send({content: "@everyone", embeds:[iemEmbed]})
		message.delete()
	}else return message.reply(":x: Yetkiniz yok.")
},

name: "css",
description: "",
aliases: [],
kategori: "",
usage: "",
}