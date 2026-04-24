const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '.env'),
  quiet: true,
  override: false,
});

module.exports = {
    PORT: process.env.PORT || 50900,
    SESSION_PREFIX: process.env.SESSION_PREFIX || "Minister~",
    GC_JID: process.env.GC_JID || "K0fYnrnFSarF5rKHfEPWgF",
    GC_JID2: process.env.GC_JID2 || "KoK02NUGIdsL0vqY7U9DjY",
    DATABASE_URL: process.env.DATABASE_URL || "",
    BOT_REPO: process.env.BOT_REPO || "https://github.com/emkay416/MinisterX-md-",
    WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VamMdLZ8fewqWt6Ei51y",
    MSG_FOOTER: process.env.MSG_FOOTER || "> *𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝑲𝒊𝒋𝒂𝒏𝒂 𝒀𝒂 𝑴𝒊𝒏𝒊𝒔𝒕𝒆𝒓*",
};
