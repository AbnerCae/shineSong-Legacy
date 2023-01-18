module.exports = {
	name: '$alwaysExecute',
	code: `
 $log[> [music] Ação rápida de 'autoPlay' por $userTag]
 $autoPlay[youtube]
 $deletecommand
 $suppressErrors[❌ Ocorreu um erro inesperado...\n> \`{error}\` {delete:15s}]
 $onlyIfMessageContains[$toLowercase[$message[1]];autoplay;]
 $onlyForChannels[$getServerVar[textChannel];]
 `
}