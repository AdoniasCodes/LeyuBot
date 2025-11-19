const messages = {
  am: {
    welcome: (name) => `ሰላም፣ ${name || 'እንግዳ'}! ወደ ልዩ ባስ እንኳን በደህና መጡ!

ለሀገር ውስጥ የጉዞ ትኬት ፍላጎትዎ ልዩ-ባስን ስለመረጡ እናመሰግናለን።
የእኛ ዋና ዓላማ ፈጣን፣ ዘመናዊና አስተማማኝ የትኬት መቁረጫ አገልግሎት ለእርስዎ ማቅረብ ነው።

ከዚህ በታች ያሉትን አማራጮች ይጠቀሙ።`,
    buttons: {
      website: '🌐 ድር ጣቢያ ክፈት',
      language: '🗣️ ቋንቋ ቀይር',
      support: '📞 ድጋፍ',
      tutorial: '❓ መመርያ',
      back: '🔙 ተመለስ'
    },
    support: "ለድጋፍ እባክዎን በቴሌግራም ይጠይቁን፡ @leyubussupport",
    tutorial: "1. 'ድር ጣቢያ ክፈት' የሚለውን ይጫኑ።\n2. መነሻ እና መድረሻ ይምረጡ።\n3. በቴሌብር ይክፈሉ።",
    lang_changed: "✅ ቋንቋ ወደ አማርኛ ተቀይሯል!"
  },
  or: {
    welcome: (name) => `👋 Gara Leyu Bustti nagaa dhaan dhuftan! ${name || 'Eebbaa'}.

Kaayyoon keenya teessoo imala keessanii salphaa fi saffisaa gochuu dha. 
Eegaluuf filannoo armaan gadii fayyadamaa!`,
    buttons: {
      website: '🌐 Weebsaayitii Banaa',
      language: '🗣️ Afaan Jijjiiri',
      support: '📞 Gargaarsa',
      tutorial: '❓ Qajeelfama',
      back: '🔙 Deebi\'i'
    },
    support: "Gargaarsaaf nu waliin Telegram irratti nu qunnamaa: @leyubussupport",
    tutorial: "1. 'Weebsaayitii Banaa' tuqaa.\n2. Baktii keessanii fi deebi'ii filadhaa.\n3. Kaffaltii godhaa.",
    lang_changed: "✅ Afaan gara Afaan Oromootti jijjiirameera!"
  },
  ti: {
    welcome: (name) => `👋 እንቋዕ ናብ ለዩ ኣውቶቡስ ብደሓን መጽኣኹም! ${name}.

ተልእኾና ምምዝጋብ ጉዕዞኹም ቀሊልን ቅልጡፍን ምግባር እዩ።`,
    buttons: {
      website: '🌐 ወብሳይት ክፈት',
      language: '🗣️ ቋንቋ ቀይር',
      support: '📞 ሓገዝ',
      tutorial: '❓ መምርሒ',
      back: '🔙 ተመለስ'
    },
    support: "ሓገዛ ንምርካብ፡ @leyubussupport በቲሌግራም ይራኸቡና።",
    tutorial: "1. 'ወብሳይት ክፈት' ዝብል ጠቕሊልኩም።\n2. መድረሽኹም ምረጹ።",
    lang_changed: "✅ ቋንቋ ናብ ትግርኛ ተቐይሩ!"
  },
  en: {
    welcome: (name) => `👋 **Welcome to Leyu Bus!** ${name || 'Traveler'}.

Our mission is to make your travel booking simple and fast. Use the options below to get started!`,
    buttons: {
      website: '🌐 Open Website',
      language: '🗣️ Change Language',
      support: '📞 Support',
      tutorial: '❓ Tutorial',
      back: '🔙 Back'
    },
    support: "For support, please contact us on Telegram: @leyubussupport",
    tutorial: "1. Press 'Open Website'.\n2. Select origin and destination.\n3. Pay using Telebirr.",
    lang_changed: "✅ Language changed to English!"
  },
  so: {
    welcome: (name) => `👋 Ku soo dhawoow Leyu Bus! ${name}.

Ujeeddadeennu waa inaan fududeyno oo dedejino dalbashada safarkaaga.`,
    buttons: {
      website: '🌐 Fur Website',
      language: '🗣️ Bedel Luqadda',
      support: '📞 Taageero',
      tutorial: '❓ Cashar',
      back: '🔙 Noqo'
    },
    support: "Fadlan nala soo xiriir Telegram: @leyubussupport",
    tutorial: "1. Riix 'Fur Website'.\n2. Dooro goobta.\n3. Ku bixi Telebirr.",
    lang_changed: "✅ Luqadda waa la bedelay!"
  }
};

module.exports = { messages };
