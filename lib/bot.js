const { Bot, session, InlineKeyboard } = require("grammy");
const { messages } = require("./content");

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) throw new Error("TELEGRAM_BOT_TOKEN is missing");

const bot = new Bot(token);

// Session middleware (resets on server restart)
bot.use(session({ initial: () => ({ lang: "am" }) }));

const getMainMenu = (langCode) => {
  const txt = messages[langCode]?.buttons || messages.am.buttons;
  return new InlineKeyboard()
    .url(txt.website, "https://www.leyubus.com/")
    .row()
    .text(txt.language, "menu_lang")
    .text(txt.support, "menu_support")
    .row()
    .text(txt.tutorial, "menu_tutorial");
};

const getLangMenu = () => {
  return new InlineKeyboard()
    .text("አማርኛ 🇪🇹", "set_am").row()
    .text("Afaan Oromoo 🇪🇹", "set_or").row()
    .text("ትግርኛ 🇪🇹", "set_ti").row()
    .text("English 🇬🇧", "set_en").row()
    .text("Somali 🇸🇴", "set_so").row()
    .text("🔙 Back / ተመለስ", "menu_main");
};

bot.command("start", async (ctx) => {
  const lang = ctx.session.lang || 'am';
  const name = ctx.from?.first_name || "";
  await ctx.reply(messages[lang].welcome(name), {
    reply_markup: getMainMenu(lang),
  });
});

bot.callbackQuery("menu_lang", async (ctx) => {
  await ctx.editMessageText("ቋንቋ ይምረጡ / Select Language:", { reply_markup: getLangMenu() });
  await ctx.answerCallbackQuery();
});

bot.callbackQuery(/^set_(.+)$/, async (ctx) => {
  const newLang = ctx.match[1];
  if (messages[newLang]) {
    ctx.session.lang = newLang;
    await ctx.deleteMessage().catch(() => {}); 
    await ctx.reply(`${messages[newLang].lang_changed}\n\n${messages[newLang].welcome(ctx.from?.first_name)}` , {
      reply_markup: getMainMenu(newLang)
    });
  }
  await ctx.answerCallbackQuery();
});

bot.callbackQuery("menu_support", async (ctx) => {
  await ctx.reply(messages[ctx.session.lang || 'am'].support);
  await ctx.answerCallbackQuery();
});

bot.callbackQuery("menu_tutorial", async (ctx) => {
  await ctx.reply(messages[ctx.session.lang || 'am'].tutorial);
  await ctx.answerCallbackQuery();
});

bot.callbackQuery("menu_main", async (ctx) => {
  const lang = ctx.session.lang || 'am';
  await ctx.editMessageText(messages[lang].welcome(ctx.from?.first_name), {
    reply_markup: getMainMenu(lang),
  });
  await ctx.answerCallbackQuery();
});

module.exports = bot;
