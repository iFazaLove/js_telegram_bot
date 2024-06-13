require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const { token } = require('./config');

const startHandler = require('./handlers/startHandler');
const textHandler = require('./handlers/textHandler');

const bot = new TelegramBot(token, {

    polling: true

});

bot.setMyCommands([
    {command: '/start', description: 'Начальное сообщение'}
]);

startHandler(bot);
textHandler(bot);
