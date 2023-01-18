module.exports = {
	name: '$alwaysExecute',
	$if: 'v4',
	code: `
 $log[> [music] Ação rápida de 'skip' por $userTag]
 $deleteIn[13s]
 $reply[1063576409366339634]
 <@!$authorID> skipou a música \`$get[title]\`...
 $skip
 $let[title;$songInfo[title]]
 $deletecommand
 $suppressErrors[❌ Ocorreu um erro inesperado...\n> \`{error}\` {delete:15s}]
 $onlyIfMessageContains[$toLowercase[$message];skip;]
 $onlyForChannels[$getServerVar[textChannel];]
 `
}