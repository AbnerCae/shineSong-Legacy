module.exports = {
	name: '$alwaysExecute',
	code: `
 $log[quickActions/stop started by $userTag]
 $deleteIn[13s]
 $reply[1063576409366339634]
 <@!$authorID> parou a música.
 $leaveVc
 $clearQueue
 $deletecommand
 $onlyIfMessageContains[$toLowercase[$message];stop;]
 $onlyForChannels[$getServerVar[textChannel];]
 `
}