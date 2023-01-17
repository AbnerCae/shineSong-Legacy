const { Voice, LoadCommands, Bot } = require("aoi.js");
const bot = new Bot({
  token: process.env.TOKEN,
  prefix: "*",
  intents: ["GUILDS", "GUILD_MESSAGES","GUILD_MEMBERS", "GUILD_VOICE_STATES"]
});
const loader = new LoadCommands(bot);
const voice = new Voice(bot, {
    cache: {
      cacheType: "Memory",
      enabled: true,
    },
  },
	true,
);
voice.onTrackStart();
bot.onMessage({
  guildOnly: false
});
bot.onInteractionCreate();
voice.onTrackEnd();

bot.variables({
	"server": "915937663717109770",
	"voiceChannel": "", //canal
	"textChannel": "", //canal
	"textID": "" //id da mensagem
});

loader.load(bot.cmd, "./commands/");
loader.load(voice.cmd, "./commands/main/music/");

const express = require('express');
const app = express();
const PORT = process.env.PORT || 80
app.get('/', (request, response) => {
	response.sendStatus(200)
});
function server() {
	app.listen(PORT, function(err){
		if (err) console.log('Error in server setup');
		console.log('Conectado na porta: ' + PORT)
	})
};
server();