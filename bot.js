let CONFIG = require('./config.json');
let quotes = CONFIG.quotes;
let prefix = CONFIG.prefix;
let command = CONFIG.command;

let InfiniteLoop = require('infinite-loop');
let il = new InfiniteLoop;

function randomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
};

il.add(randomQuote, []);

il.run();

console.log(randomQuote());

const { Client, Intents } = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let startCom = prefix+command;
bot.on("message", (message) => {
  if (message.content.startsWith(startCom)) {
    message.channel.sendMessage(randomQuote());
  }
});


bot.login(CONFIG.token);
