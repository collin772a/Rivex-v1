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
global.sudo = process.env.SUDO |698783976| "";
global.owner = process.env.OWNER_NUMBER |698783976| "";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJNc2oybHpoVUZkdHRJc0FwS1NKUkRCdG9Rc1k3eVNlRFB3djQvYzNIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElDYTFvalNTa1pZSGdQOUF4V0RvMENPZFRLVFUyRlUyQkI0Q0l5SkpUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhR1N3cEIySnRLdjN4VjJCd2ZBNEM3VGI3U09wOXJiZitiRTJ2ZGtTSEYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMTUoyVWN0YzhrT00zWktkUGU2bGJ4S2pNRTkrSDl5bTlJak53cm85MVYwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCNFR5QmVYQmZ2QS9sQ1RPTnJQTUZlc3VpMHBBMkpaRnVJZFhkT3g2MG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJV2Fad0RGeVBNU2IydXVyKzN6UnFIcEtucDczK0xJT0Fwb3kxL056WDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVscnRYeWcvRFBVWlB4S2NQSVdxZVRtV3oyRytNSnR2OXlWUDgxL0pIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYytWUG5pNUxXQmxDdU1ZaTlnWDhxL3VTNExyZy9FUUxsZm1GZ3VMbXBTQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRjcWlzRE5Jd3BkdVlNMUpra3Z4QVZMQy9NdkRzcnc5TnJiZ2MrakVXS3Biclk5UUllRXM3OWhVZE8wRGdUSVhnd29oQWlaMGg3UEN2TjU5RWNhVWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IkZRN09Ocmp6QW83OTlxNlh2VnUxUjFzbEZkRUpQT1R2dDZtZmJGM2tWcEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM3Njk4NzgzOTc2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBRjM0QkM5Q0Q4MkExMkIwNzg5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI1MzY2Njh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjUtamZ4ZFFvU3lXLTdTRy1fOWNvZEEiLCJwaG9uZUlkIjoiZTlhMGFkMzAtOTY0NS00OTBmLWJjNzYtNmNiZTNhMjkxMmYwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlArODQzbU40ZlpFZ0pVc21STFhKRmFHZ0JFRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhVFpoS2JSb0ZuemJRZ2d5TVJhSUpsUStOT0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWVo2QzZNMUoiLCJtZSI6eyJpZCI6IjIzNzY5ODc4Mzk3Njo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlMuRS5CLkEuUyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkd6bzlVTUVNeWxyN1VHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiclB2UWRjMlNZYit6SGUzZXRHMlZLQXJPdXRZbkFzUGx6VG5NUXdwaXkzOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWnhDVTlSbkgzc1hRNjI3VVBlK0JxMXlQanNHa1pheFhidE9lYW9maFYySk1uam0vRzZJS0xhYkFPOTBPZDd1NFZSRWF1TmtFbndXUkV6UW1OT0I1aGc9PSIsImRldmljZVNpZ25hdHVyZSI6IklMR1ZzdEMwelE5TW04VUQxbk1QMTdiMXhqR2dXY0VyZ1FaWm1DTisxekFPcmlWRDZ0Q3JKaFpjZGFHVEV1YWg0NlNqcmlZOUNXZVZpMmlWQTk4eWpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk4NzgzOTc2OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXo3MEhYTmttRy9zeDN0M3JSdGxTZ0t6cnJXSndMRDVjMDV6RU1LWXN0LyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjUzNjY2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFES3gifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`SEBAS™`",
  author: process.env.PACK_AUTHER || "S E B A S",
  packname: process.env.PACK_NAME || "SEBAS",
  botname: process.env.BOT_NAME || "SEBAS BOT",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
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
