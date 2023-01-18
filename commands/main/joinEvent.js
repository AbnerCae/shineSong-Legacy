module.exports = [{
	name: 'joinEvent',
	code: `
 $get[categoryID]
 $let[categoryID;$createChannel[$guildID;🎵 Shine Song;category;yes]]
 `
}, {
	name: 'msgOnJoin',
	code: `
 __🎵 **Obrigado por me adicionar ao seu servidor!** 🎵__
 > Sou um bot de músicas pequeno, brasileiro e feito para ter suporte apenas para músicas do YouTube.
 __❓ **Como $username[$clientID] funciona?**__
 > É criado dois canais especiais: <#$get[textChannel]> e <#$get[voiceChannel]>. Única coisa que você precisa fazer é estar dentro da call especial e mandar um link ou nome do vídeo do YouTube em <#$get[textChannel]>, Pronto! fácil não?
 - Meu prefixo no servidor é \`$getServerVar[prefix]\`
 - Use o botão de suporte se tiver algum problema.
 $let[textChannel;$getServerVar[textChannel]] $let[voiceChannel;$getServerVar[voiceChannel]]
 `
}]

//$createChannel