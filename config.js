// SBLHACKER-MD CONFIGURATION FILE - NO SESSION ID REQUIRED
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

// WhatsApp Channel Link
const CHANNEL_LINK = "https://whatsapp.com/channel/0029VbBVDAc1noz5dhxnYO3r";

// Pairing Page - Sirf number dalo, code aao
global.pairing_page = "https://sblhacker-pair.onrender.com"; // Custom pairing page (main bana kar dunga)

module.exports = {
// NO SESSION ID NEEDED - Direct pairing through number
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed By SBLHACKER MD\nJoin: " + CHANNEL_LINK,
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "SBLHACKER",
PACK_AUTHOR: process.env.PACK_AUTHOR || "SBLHACKER",
PACK_NAME: process.env.PACK_NAME || "SBLHACKER-MD",
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", // Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "null, pm, dm, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_\nJoin: " + CHANNEL_LINK + "*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "SBLHACKER-MD",
BOT_PIC: process.env.BOT_PIC || "https://i.postimg.cc/8Cyn5rh2/OIG3-1.jpg", // Tumhari image link
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "I am SBLHACKER MD 🤖 Join Channel: " + CHANNEL_LINK,
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true for all chats, inbox for PM only, groups for groups only
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false",
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi",
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// SBLHACKER-MD 🔥 - NO SESSION ID NEEDED! SIRF NUMBER DALO AUR CODE AAYO!