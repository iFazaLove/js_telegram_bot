const { admin_id } = require('../config');


module.exports = function(bot) {

    bot.onText(/\/start/, async message => {

        // ВЫЧИСЛЯЕМ АДМИНА
        if (message.chat.id == admin_id) {

            await bot.sendMessage(message.chat.id, "Привет, Админ!");
        }
        else {

            await bot.sendMessage(message.chat.id, "Отправьте сообщение.");
        }

    });
};
  
  