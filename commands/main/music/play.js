module.exports = {
	name: '$alwaysExecute',
	$if: 'v4',
	code: `
 $log[> [music] Adicionado a música '$message' por $userTag ($authorID) no servidor $serverName ($guildID)]
 $sendMessage[{execute:startEvent}]
 $wait[3s]
 $playerConfig[yes;5m]
 $let[msg;$playTrack[youtube;$message]]
 $if[$hasPlayer==false]
 $joinVc[$getServerVar[voiceChannel]]
 $endIf
 $suppressErrors[❌ Ocorreu um erro inesperado...\n> \`{error}\` {delete:15s}]
 $onlyIf[$voiceID[$authorID]==$getServerVar[voiceChannel];
 <@$authorID>, Entre no canal de voz <#$getServerVar[voiceChannel]> para escutar a música. {delete:12s}]
 $deletecommand
 $onlyIf[$checkContains[$toLowercase[$message[1]];skip;stop;pause;auto]!=true;]
 $onlyForChannels[$getServerVar[textChannel];]
 `
}