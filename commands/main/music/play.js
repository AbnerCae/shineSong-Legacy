module.exports = {
	name: '$alwaysExecute',
	$if: 'v4',
	code: `
 $sendMessage[{execute:startEvent}]
 $wait[5s]
 $playerConfig[yes;5m]
 $let[msg;$playTrack[youtube;$message]]
 $if[$hasPlayer==false]
 $joinVc[$getServerVar[voiceChannel]]
 $endIf
 $onlyIf[$voiceID[$authorID]==$getServerVar[voiceChannel];
 <@$authorID>, Entre no canal de voz <#$getServerVar[voiceChannel]> para escutar a música. {delete:12s}]
 $deletecommand
 $onlyIf[$checkContains[$toLowercase[$message[1]];skip;stop;pause;auto]!=true;]
 $onlyForChannels[$getServerVar[textChannel];]
 `
}