require('dotenv').config();

module.exports = {
  token: process.env.TELEGRAM_BOT_TOKEN,
  admin_id: process.env.ADMIN_CHAT_ID
};