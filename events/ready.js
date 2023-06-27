module.exports = {
	name: "ready",
	once: true,
	async execute(client, Discord) {
		console.log(`${client.user.tag}, kullanıma hazır.`);
		client.user.setPresence({
			activities: [{ name: `Ponet #Yakında`, type: `WATCHING` }],
			status: `dnd`,
			allowedMentions: { parse: ["users"], repliedUser: false },
		});		
	},
};
