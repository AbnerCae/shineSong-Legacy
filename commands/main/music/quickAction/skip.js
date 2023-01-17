module.exports = {
	name: '$alwaysExecute',
	$if: 'v4',
	code: `
 $log[quickActions/skip started by $userTag]
 $deleteIn[13s]
 $reply[1063576409366339634]
 <@!$authorID> skipou a música \`$get[title]\`...
 $skip
 $let[title;$songInfo[title]]
 $deletecommand
 $onlyIfMessageContains[$toLowercase[$message];skip;]
 $onlyForChannels[$getServerVar[textChannel];]
 `
}