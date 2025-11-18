const TelegramBot = require('node-telegram-bot-api');
const { attachHandlers } = require('../lib/handlers');

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  console.error('Error: TELEGRAM_BOT_TOKEN is not set');
}

let bot;
function getBot() {
  if (!bot) {
    bot = new TelegramBot(token, { polling: false });
    attachHandlers(bot);
  }
  return bot;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(200).send('Leyu Bus Bot webhook is up');
  }

  try {
    const b = getBot();
    // Telegram sends JSON updates; @vercel/node parses req.body
    await b.processUpdate(req.body);
    // Respond 200 quickly so Telegram doesn't retry
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error processing update:', error);
    // Still return 200 to avoid aggressive retries; monitor logs
    return res.status(200).json({ ok: true });
  }
};
