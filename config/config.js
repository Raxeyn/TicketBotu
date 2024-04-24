module.exports = {
    TOKEN: 'TOKEN', // Token de votre bot
    PREFIX: '!', // Prefix de votre bot

    status: {
        type: 'STREAMING', //STREAMING, LISTENING, WATCHING, PLAYING
        url: 'https://twitch.tv/raxeyn', //url du stream seulement si type = STREAMING
        stateList: [ // Liste des activité du bot 
            '{user} utilisateurs',
            '{PREFIX}help',
            'discord.gg/VnYjQTqXuy'
        ]    
    },

    ticket: {
        category: '1174294310334779432', // ID de la catégorie ou seront créés les tickets
        messageOptions: {
            messageOpen: '{guildName} bilet paneline hoş geldiniz, bilet açmak için aşağıdaki butona tıklayın.', // Bilet açmak için mesaj görüntüleniyor
             messageOpened: 'Biletiniz açıldı, aşağıdaki butona tıklayarak kapatabilirsiniz.', // Bilet açıldığında görüntülenen mesaj
             messageClose: 'Biletiniz kapatılmıştır, aşağıdaki butona tıklayarak silebilirsiniz.', // Bilet kapatıldığında görüntülenen mesaj
             messageError: 'Zaten açık bir biletiniz var.' // Bilet zaten açık olduğunda görüntülenen mesaj
         },
         btnOptions: {
             text: 'Bilet aç', // Buton metni
             emoji: '🎫' // Düğme emojisi
        },
        roleAccess: [
            'ROLE ID 1', // ID des rôles qui peuvent voir les tickets
            'ROLE ID 2',
        ]
    },

    logs: {
        enabled: true, // Activer les logs
        channel: '1216691216633040956', // ID du channel ou seront envoyés les logs
    },

    owner: ['855087492603838474'] // ID du(s) owner(s) du bot
}
