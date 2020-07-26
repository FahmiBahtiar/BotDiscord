const figlet = require('figlet');
const colors = require('colors');
const readline = require('readline');

const { Collection, Client, Discord } = require('discord.js');
const fs = require('fs');
const bot = new Client({
	disableEveryone: true
});
const config = require('./botconfig.json');
const prefix = config.prefix;
const token = config.token;

bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync('./commands/');
['command'].forEach(handler => {
	require(`./handlers/${handler}`)(bot);
});
bot.on('ready', () => {
	function randomStatus() {
		let status = [
			`👥With ${bot.users.cache.size} Members !`,
			`📡With ${bot.guilds.cache.size} Server !`
		]; // You can change it whatever you want.
		let rstatus = Math.floor(Math.random() * status.length);

		// client.user.setActivity(status[rstatus], {type: "WATCHING"});
		// You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.
		// Example: streaming

		bot.user.setActivity(status[rstatus], { type: 'WATCHING' });
	}
	setInterval(randomStatus, 5000); // Time in ms. 10000ms = 10 seconds. Min: 20 seconds, to avoid ratelimit.

	console.log(figlet.textSync('B L I M B I N G').green);
	console.log('I am online :)');
	console.log(
		`Created by Hamba Allah. Random send time set @ 0.01-${config.wait}s`
	);
	console.log(`Bot Prefix has been set to ${config.prefix}\n\n`);
	console.log(`Keep the spirit in Developing`);
	console.log(`Good luck.`);
});
bot.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	if (!message.guild) return;
	if (!message.member)
		message.member = await message.guild.members.fetch(message);
	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/g);
	const cmd = args.shift().toLocaleLowerCase();
	if (cmd.length == 0) return;
	const command = bot.commands.get(cmd);
	if (command) command.run(bot, message, args);
});
bot.login(token);