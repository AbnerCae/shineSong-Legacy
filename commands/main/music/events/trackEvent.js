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
	every: 90000,
	executeOnStartup: true,
	code: `
 $log[execute start event in loop]
 $sendMessage[{execute:startEvent}]
 $onlyIf[$hasPlayer==true;]
 `
}]