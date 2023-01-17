module.exports = [{
	name: '$alwaysExecute',
	code: `
 $onlyIf[$get[status]!=playing;{execute:pauseTrack}]
 $onlyIf[$get[status]!=paused;{execute:resumeTrack}]
 $let[status;$playerStatus]
 $deletecommand
 $onlyIfMessageContains[$toLowercase[$message[1]];pause;]
 $onlyForChannels[$getServerVar[textChannel];]
 `
}, {
	name: 'pauseTrack',
	type: 'awaited',
	code: `
 $sendMessage[{execute:startEvent}]
 $wait[1s]
 $pauseTrack
 Música pausada. $deleteIn[12s]
 `
}, {
	name: 'resumeTrack',
	type: 'awaited',
	code: `
 $sendMessage[{execute:startEvent}]
 $wait[1s]
 $resumeTrack
 Música retomada. $deleteIn[12s]
 `
}]