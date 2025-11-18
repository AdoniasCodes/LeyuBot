require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { attachHandlers } = require('./lib/handlers');

// Initialize the bot with your token from environment variables
const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  console.error('Error: TELEGRAM_BOT_TOKEN is not defined in .env file');
  process.exit(1);
}

// Local development uses polling
const bot = new TelegramBot(token, { polling: true });

// Attach shared handlers
attachHandlers(bot);

console.log('🤖 Leyu Bus Bot (polling) is running...');
