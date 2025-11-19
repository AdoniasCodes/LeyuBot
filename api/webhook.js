const { webhookCallback } = require("grammy");
const bot = require("../lib/bot");

// Create the webhook handler once (avoid re-creating on every invocation)
const handleUpdate = webhookCallback(bot, "http", { timeoutMilliseconds: 0 });

module.exports = (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(200).send("OK");
    }
    return handleUpdate(req, res);
  } catch (e) {
    console.error(e);
    return res.status(500).send("Error");
  }
};
