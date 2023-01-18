module.exports = [{
	name: '$alwaysExecute',
	code: `
 $onlyIf[$get[status]!=playing;{execute:pauseTrack}]
 $onlyIf[$get[status]!=paused;{execute:resumeTrack}]
 $let[status;$playerStatus]
 $deletecommand
 $suppressErrors[❌ Ocorreu um erro inesperado...\n> \`{error}\` {delete:15s}]
 $onlyIfMessageContains[$toLowercase[$message[1]];pause;]
 $onlyForChannels[$getServerVar[textChannel];]
 `
}, {
	name: 'pauseTrack',
	type: 'awaited',
	code: `
 $log[> [music] Ação rápida de 'pause' por $userTag]
 $sendMessage[{execute:startEvent}]
 $wait[1s]
 $pauseTrack
 Música pausada. $deleteIn[12s]
 $suppressErrors[❌ Ocorreu um erro inesperado...\n> \`{error}\` {delete:15s}]
 `
}, {
	name: 'resumeTrack',
	type: 'awaited',
	code: `
 $log[> [music] Ação rápida de 'resume' por $userTag]
 $sendMessage[{execute:startEvent}]
 $wait[1s]
 $resumeTrack
 Música retomada. $deleteIn[12s]
 $suppressErrors[❌ Ocorreu um erro inesperado...\n> \`{error}\` {delete:15s}]

 `
}]