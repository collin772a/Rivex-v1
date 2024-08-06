//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dRQ3NicVFwZkh0eDk1ZjU5eS90SEphUDVCQWREaHRCMlpIeGRxT0xtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkZNeGZZZXNFV01PeGpOTUwwS0JMOWkwWmJkZDk2dWowQ0tGMTBFS1pDMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TTkxL2Rzd1c3OGo4d1Q1RXFWdDFYQWJBMXRldWVkdnZWR05GNHNKVFVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqdGFLWmFWMDRQbFkrUCs3aEx3MDZDR3FGa2VQNzhObHpBT3VBK3pDMVFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFKWFhqYlRha3UzNEJUMjgyUk5QQmRNdGkvSGQ3UVVWRlF0c3Vqa3k1VlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRGamNNbTlub25ISUtSWE1McTN0RHhYTHZ1TTlRQkxMTHpoMFkrNE9yQ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5qaGx6MEVsSFY3ZjRCVmlyUUtteWUyZmZ4aVN4dTQ4bnhhMHh0REpXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmhWeFloT2FnNktaRjFrek5DVzd1K2FNcTJPdEJSZW82L1NtRkFsOTRrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJPYWtjQmIxT3FXK0I2dDJ6c0RwOElpYk5rSnE3S3Vydng2SStoY2ZPU2xyOWExcHN2WW94dm9rcXV5RjJUL0sxbHF0THA0UVFTZWx0WWI3Q041K0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDUsImFkdlNlY3JldEtleSI6IkhGWmJiYzJwYVc2VlFqb3pkb05LMWVLcG9jUE5DSS9lRUwxTXhTcHJWdUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikp4R2M0cUZQVFYteTBKN2dCMHF1eFEiLCJwaG9uZUlkIjoiZTE1YTQxMTMtMmI4Yi00ZTg2LTg0YWEtZmRkNjQzOGI0NjcxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ6cVdMS2JHOEhtNFBaRmc5Z2hhYmdMajc0ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSMEl2YXI5MnJ4VGFIRjZUOXh5R3ZKSjFpTUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUtLS0JGSlQiLCJtZSI6eyJpZCI6IjkyMzEwMzY5MTE2Nzo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlVtYXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05mNnZ2RURFTFc0eHJVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImJyZ0txTGRPaVMyMlVjWDZINGNKRVRlZEc1a0taZmVJc2V3UnNrRHZ6RUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRDem9wMTc4YVBsZkZjRTRqWE1tVmRWd21PMTdwNlE1K0xXTFNmYng0MmpiREcwekErMjl2b2w4OHhVanZ5eG9mOE5sSlJheEhTaVhBckI2cUJ2bURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJidFp1TWtrekNzMTg0YVYyeFh2OTh0UnlJTGFCT3E1TWZMdndmR054b3hkOHBHYjN4aTlBc1YxUHk5ZHNmVGthOWtjd3N4WVFiU01mejFONzVmQnRDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzEwMzY5MTE2Nzo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlc2NENxaTNUb2t0dGxIRitoK0hDUkUzblJ1WkNtWDNpTEhzRWJKQTc4eEEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI5MTU5MDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjQ5In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`MR.UMAR`",
  author: process.env.PACK_AUTHER || "MR.UMAR",
  packname: process.env.PACK_NAME || "ALONE R.K",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "UMAR",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
