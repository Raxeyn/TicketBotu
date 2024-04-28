const {MessageActionRow, MessageSelectMenu} = require('discord.js')

module.exports = {
	config: {
		aliases: ["setup"],
		name: "setup",
        help: "setup",
		enabled: true
	},

	run: async ({ client, message, args, embed, guild, author }) => {

        message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Oluşturulacak bilet türünü seçin.')
					.addOptions([
						{
							label: 'Yetkili Alım',
							description: 'Yetkili alım bileti açarsınız.',
							value: 'yetkilialım',
						},
						{
							label: 'Öneri/İstek/Şikayet',
							description: 'Öneri/İstek/Şikayet bileti açarsınız.',
							value: 'öneriistekşikayet',
						},
                        {
							label: 'Destek',
							description: 'Destek bileti açarsınız.',
							value: 'destek',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Bilet',
                description: 'Lütfen açmak istediğiniz bilet türünü seçin.',
                color: "BLURPLE",
                footer: {text: 'NovaProject Ticket System'}
            }],
            components: [row]
        })
    }
}
