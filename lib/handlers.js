const messages = {
  am: {
    welcome: (userName) => `ሰላም፣ ${userName || 'እንግዳ'}! ወደ ልዩ ባስ እንኳን በደህና መጡ!

ለUገር ውስጥ የጉዞ ትኬት ፍላጎትዎ ልዩ-ባስን ስለመረጡ እናመሰግናለን።

የእኛ ዋና ዓላማ ፈጣን፣ ዘመናዊና አስተማማኝ የትኬት መቁረጫ አገልግሎት ለእርስዎ ማቅረብ ነው።

ጉዞዎን ለመጀመር ወይም አገልግሎታችንን በተመለከተ የበለጠ ለማወቅ ከዚህ በታች ያሉትን አማራጮች ይጠቀሙ።

ፈጣን መመሪያ:

- ትኬት አሁን ለመቁረጥ፣ 'ድረ ገጽ' የሚለውን ይጫኑ።
- የቋንቋ ምርጫዎን ለመቀየር፣ 'ቋንቋ' የሚለውን ይጠቀሙ።`,
    support: "ለድጋፍ እባክዎን በቴሌግራም ይጠይቁን፡ @leyubussupport",
    tutorial: `የለዩ አውቶቡስ መመርያ

1. 'ድር ጣቢያ ክፈት' የሚለውን ይጫኑ።
2. መነሻ እና መድረሻ ቦታዎችዎን ይምረጡ።
3. መቀመጫዎን ይምረጡ እና በቴሌብር ወይም በሲቢኢ ብር ይክፈሉ።

በጣም ቀላል ነው!`
  },
  or: {
    welcome: (userName) => `👋 Gara Leyu Bustti nagaa dhaan dhuftan! ${userName || 'Eebbaa'}, filannoon keessan inni jalqabaa kan tikeeta baasii.

Kaayyoon keenya teessoo imala keessanii salphaa fi saffisaa gochuu dha. Eegaluuf yookiin waa'ee isaa caalaatti baruuf filannoo armaan gadii fayyadamaa!

**Qajeelcha Dafaa:**
1. Amma tikeeta bitachuuf **'Weebsaayitii Banaa'** tuqaa.
2. Afaanota jijjiiruuf **'Afaan Jijjiiri'** fayyadamaa.`,
    support: "Gargaarsaaf nu waliin Telegram irratti nu qunnamaa: @leyubussupport",
    tutorial: "### Qajeelfama Leyu Busii ### \n\n1. 'Weebsaayitii Banaa' jedhu tuqi.\n2. Baktii keessanii fi deebi'ii filadhaa.\n3. Teessoo keessan filadhaa fi Telebirriin ykn CBE Birriin kaffaltii godhaa.\n\nAkkaataa kanaan isa gabaabaa dha!"
  },
  ti: {
    welcome: (userName) => `👋 እንቋዕ ናብ ለዩ ኣውቶቡስ ብደሓን መጽኣኹም! ${userName || 'ሰላምታ'}, ቀዳማይ ምርጫኹም ንትኬት ባስ።

ተልእኾና ምምዝጋብ ጉዕዞኹም ቀሊልን ቅልጡፍን ምግባር እዩ። ንምጅማር ወይ ዝያዳ ንምፍላጥ ነዚ ታሕቲ ዘሎ ምርጫታት ተጠቐሙ!

**ቅልጡፍ መምርሒ:**
1. ሕጂ ትኬታት ንምግዛእ **'ወብሳይት ክፈት'** ዝብል ጽቐጡ።
2. ቋንቋታት ንምልዋጥ **'ቋንቋ ቀይር'** ዝብል ተጠቐሙ።`,
    support: "ሓገዛ ንምርካብ፡ @leyubussupport በቲሌግራም ይራኸቡና።",
    tutorial: "### መምርሒ ለዩ ኣውቶቡስ ### \n\n1. 'ወብሳይት ክፈት' ዝብል ጠቕሊልኩም።\n2. መእተዊኹምን መድረሽኹምን ምረጹ።\n3. መበገሲኹም ምረጹን በይሕረትኩም ብቴሌብር ወይ ብሲቢኢ ብር ክፈልዩ።\n\nከምዚ ቀሊል እዩ!"
  },
  en: {
    welcome: (userName) => `👋 **Welcome to Leyu Bus!** ${userName || 'Traveler'}, your premier choice for bus ticketing.

Our mission is to make your travel booking simple and fast. Use the options below to get started or learn more!

**Quick Guide:**
1. Press **'Open Website'** to buy tickets now.
2. Use **'Change Language'** to switch languages.`,
    support: "For support, please contact us on Telegram: @leyubussupport",
    tutorial: "### Leyu Bus Tutorial ### \n\n1. Press the 'Open Website' button. \n2. Select your origin and destination. \n3. Choose your seat and pay using Telebirr or CBE Birr. \n\nIt's that simple!"
  }
  ,
  so: {
    welcome: (userName) => `👋 Ku soo dhawoow Leyu Bus! ${userName || 'Saxiib'}, xulashada koowaad ee tigidhada baska.

Ujeeddadeennu waa inaan fududeyno oo dedejino dalbashada safarkaaga. Isticmaal ikhtiyaarrada hoose si aad u bilowdo ama wax badan uga barato! 

**Hagid Degdeg ah:**
1. Riix **'Fur Website'** si aad tigidh u iibsato hadda.
2. Isticmaal **'Bedel Luqadda'** si aad luqadda u beddesho.`,
    support: "Fadlan nala soo xiriir Telegram: @leyubussupport",
    tutorial: "### Casharka Leyu Bus ###\n\n1. Riix 'Fur Website'.\n2. Dooro goobta ka bixitaanka iyo meesha aad u socoto.\n3. Dooro kursigaaga oo ku bixi Telebirr ama CBE Birr.\n\nWay fududahay!"
  }
};

const DEFAULT_LANGUAGE = 'am';
const userLanguage = {};

const getMenuOptions = (lang = 'am') => {
  const menuTexts = {
    am: {
      website: '🌐 ድር ጣቢያ ክፈት',
      language: '🗣️ ቋንቋ ቀይር',
      support: '📞 ድጋፍ ያግኙ',
      tutorial: '❓ መመርያ ይመልከቱ'
    },
    or: {
      website: '🌐 Weebsaayitii Banaa',
      language: '🗣️ Afaan Jijjiiri',
      support: '📞 Gargaarsa Argaa',
      tutorial: '❓ Qajeelfama Ilaali'
    },
    ti: {
      website: '🌐 ወብሳይት ክፈት',
      language: '🗣️ ቋንቋ ቀይር',
      support: '📞 ሓገዝ ረኸብ',
      tutorial: '❓ መምርሒ ርአ'
    },
    en: {
      website: '🌐 Open Website',
      language: '🗣️ Change Language',
      support: '📞 Contact Support',
      tutorial: '❓ View Tutorial'
    },
    so: {
      website: '🌐 Fur Website',
      language: '🗣️ Bedel Luqadda',
      support: '📞 La Xiriir Taageero',
      tutorial: '❓ Eeg Cashar'
    }
  };

  const texts = menuTexts[lang] || menuTexts['am'];

  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: texts.website, web_app: { url: 'https://www.leyubus.com/' } }],
        [
          { text: texts.language, callback_data: 'language_picker' },
          { text: texts.support, callback_data: 'contact_support' }
        ],
        [{ text: texts.tutorial, callback_data: 'show_tutorial' }]
      ]
    },
    parse_mode: 'Markdown'
  };
};

function attachHandlers(bot) {
  // /start command
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const userName = msg.from.first_name;

    if (!userLanguage[userId]) {
      userLanguage[userId] = DEFAULT_LANGUAGE;
    }

    const lang = userLanguage[userId];
    bot.sendMessage(chatId, messages[lang].welcome(userName), getMenuOptions(lang)).catch(console.error);
  });

  // Callback queries
  bot.on('callback_query', (callbackQuery) => {
    const msg = callbackQuery.message;
    const data = callbackQuery.data;
    const userId = callbackQuery.from.id;
    const chatId = msg.chat.id;

    const lang = userLanguage[userId] || DEFAULT_LANGUAGE;

    bot.answerCallbackQuery(callbackQuery.id).catch(console.error);

    if (data === 'language_picker') {
      bot.sendMessage(
        chatId,
        messages[lang].welcome('').split('\n')[0],
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: 'አማርኛ 🇪🇹', callback_data: 'lang_am' }],
              [{ text: 'Afaan Oromoo 🇪🇹', callback_data: 'lang_or' }],
              [{ text: 'ትግርኛ 🇪🇹', callback_data: 'lang_ti' }],
              [{ text: 'English 🇬🇧', callback_data: 'lang_en' }],
              [{ text: 'Somali 🇸🇴', callback_data: 'lang_so' }]
            ]
          },
          parse_mode: 'Markdown'
        }
      ).catch(console.error);
    } else if (data.startsWith('lang_')) {
      const newLang = data.split('_')[1];
      userLanguage[userId] = newLang;

      const langName = {
        am: 'አማርኛ',
        or: 'Afaan Oromoo',
        ti: 'ትግርኛ',
        en: 'English',
        so: 'Somali'
      }[newLang];

      bot.sendMessage(
        chatId,
        `✅ ቋንቋ ወደ ${langName} ተቀይሯል!`,
        getMenuOptions(newLang)
      ).catch(console.error);
    } else if (data === 'contact_support') {
      bot.sendMessage(chatId, messages[lang].support, { parse_mode: 'Markdown' }).catch(console.error);
    } else if (data === 'show_tutorial') {
      bot.sendMessage(chatId, messages[lang].tutorial, { parse_mode: 'Markdown' }).catch(console.error);
    }
  });

  // Error handling
  bot.on('polling_error', (error) => {
    console.error('Polling error:', error);
  });
}

module.exports = { attachHandlers };
