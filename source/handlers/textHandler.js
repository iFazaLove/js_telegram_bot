const { listMyCommands } = require('../utils/commands');
const { admin_id } = require('../config');

module.exports = function(bot) {

    bot.on('text', async message => {
        let id = message.chat.id;
        let user_info = message.from.first_name + `, id: '${message.from.id}'`;

        // ИГНОРИРУЕМ КОМАНДЫ МЕНЮ
        if (listMyCommands.includes(message.text)) {
            return;
        }
        // РЕПЛАЙ ТОЛЬКО НА СООБЩЕНИЕ БОТА С ИНФОЙ О СООБЩЕНИИ
        if (message.reply_to_message && id == admin_id 
            && message.reply_to_message.from.is_bot && message.reply_to_message.text != "Привет, Админ!"){
            let text = message.reply_to_message.text
            let dest = text.slice(text.indexOf("'") + 1, text.lastIndexOf("'"))
            await bot.sendMessage(dest, message.text);
            return
        }
        // ДОБАВЛЯЕМ НИК
        if (message.from.username) {
            user_info += ` (@${message.from.username})`;
        }

        if (id != admin_id) {
            await bot.sendMessage(admin_id, `Сообщение от пользователя ${user_info}:\n${message.text}`);
        }

    });
};