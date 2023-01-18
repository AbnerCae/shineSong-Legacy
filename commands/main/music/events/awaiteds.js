module.exports = [{
	name: 'startEvent',
	type: 'awaited',
	code: `
 $editMessage[1063576409366339634;{newEmbed:
 {title:$if[$playerStatus==playing;🎶 Tocando...;⏸️ Pausado...]}
 {thumbnail:$songInfo[thumbnail]}
 {description:Nome: **[$songInfo[title]]($songInfo[url])**\nAutor: $songInfo[author]\nDuração para acabar: $humanizeMs[$sub[$songInfo[duration];$getCurrentDuration]]}
 {field:▶️ Fila a seguir:$queue[1;5;> - **[{title}]({url})** by <@!{user.id}>.]}
 {footer:Música adicionada por $userTag[$songInfo[user.id]]:$userAvatar[$songInfo[user.id]]}
 {color:#AA7ABB}
 }};$getServerVar[textChannel]]
 $wait[2s]
 $volume[15]
 $onlyIf[$hasPlayer!=;error]
 $suppressErrors[❌ Ocorreu um erro inesperado...\n> \`{error}\` {delete:15s}]
 `
}, {
	name: 'endEvent',
	type: 'awaited',
	code: `
 $editMessage[1063576409366339634;{newEmbed:
 {title:⏹️ Nada sendo reproduzindo...}
 {description:Inicie mandando um link de um vídeo ou o nome dele.}
 };$getServerVar[textChannel]]
 $suppressErrors[❌ Ocorreu um erro inesperado...\n> \`{error}\` {delete:15s}]
 `
}]