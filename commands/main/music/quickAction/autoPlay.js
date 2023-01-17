module.exports = {
	name: '$alwaysExecute',
	code: `
 $log[quickActions/autoplay started by $userTag]
 $autoPlay[youtube]
 $deletecommand
 $onlyIfMessageContains[$toLowercase[$message[1]];autoplay;]
 $onlyForChannels[$getServerVar[textChannel];]
 `
}