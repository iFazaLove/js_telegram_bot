const TelegramBot = require('node-telegram-bot-api');

const token = '7156331559:AAEO62mqDMfuObgQSXDyOqv6ORFBd9v7woM';

const bot = new TelegramBot(token, {

    polling: true

});

bot.on('text', async message => {

    if(message.text == '/start') {

        await bot.sendMessage(message.chat.id, "Отправьте сообщение.");

    }
    else {

        await bot.sendMessage(message.chat.id, "Сообщение принято и отправлено в консоль.");
        console.log(message.text)

    }

})

