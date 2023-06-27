const Discord = require("discord.js");
const db = require("nrc.db")
const {MessageActionRow, MessageButton} = require("discord.js")
module.exports = {
calistir: async(client, message, args) => {
	if (message.member.roles.cache.has("") || message.member.permissions.has("ADMINISTRATOR")){
		if(!args[0]) return message.reply(":x: Duyuru içeriğinizi girin.");
	let mesaj = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);	
		const jgkEmbed = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setTitle("html")
		.setThumbnail("https://i.hizliresim.com/kmp0px5.png")
		.setDescription(mesaj)
		.setFooter({text: message.author.tag, iconURL: message.author.avatarURL({dynamic: true})})
		message.channel.send({content: "@everyone", embeds:[jgkEmbed]})
		message.delete()
	}else return message.reply(":x: Yetkiniz yok.")
},

name: "html",
description: "",
aliases: [],
kategori: "",
usage: "",
}