const { webhookCallback } = require("grammy");
const bot = require("../lib/bot");

module.exports = async (req, res) => {
  try {
    const handleUpdate = webhookCallback(bot, "http");
    return handleUpdate(req, res);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error");
  }
};
