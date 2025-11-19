require('dotenv').config();
const bot = require('./lib/bot');

console.log("🤖 Leyu Bus Bot is running locally...");
bot.catch((err) => console.error(err));
bot.start();
