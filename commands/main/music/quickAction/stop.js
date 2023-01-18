module.exports = {
	name: '$alwaysExecute',
	code: `
 $log[> [music] Ação rápida de 'stop' por $userTag]
 $deleteIn[13s]
 $reply[1063576409366339634]
 <@!$authorID> parou a música.
 $leaveVc
 $clearQueue
 $deletecommand
 $suppressErrors[❌ Ocorreu um erro inesperado...\n> \`{error}\` {delete:15s}]
 $onlyIfMessageContains[$toLowercase[$message];stop;]
 $onlyForChannels[$getServerVar[textChannel];]
 `
}