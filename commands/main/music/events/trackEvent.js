module.exports = [{
	channel: '$getServerVar[textChannel]',
	type: 'trackStart',
	code: `
 $sendMessage[{execute:startEvent}]
 `
}, {
	channel: '$getServerVar[textChannel]',
	type: 'trackEnd',
	code: `
 $sendMessage[{execute:endEvent}]
 $volume[15]
 `
}, {
	channel: '1063560280879136815',
	type: 'loop',
	every: 50000,
	executeOnStartup: true,
	code: `
 $log[> [music] Loop executado.]
 $sendMessage[{execute:startEvent}]
 $onlyIf[$hasPlayer==true;{execute:endEvent}]
 `
}]