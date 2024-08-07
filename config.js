//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pyUHQrNzRBLzIvWWF1aUlNand1TlNsWll1NFVER05NRkZqQTIzUVlucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmpRWUdpRUVQbnlyenFYVHk5NGExUk5tcUtyU0I5dm1sak53QTRiV3RETT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBS1ozczZnMkdUdzhzRW5OUXdOU3BMYzhtZ2VDWC9WQXNlWjV2NjJBTzI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHb29VOG85dWRTTmtDdFk4U2NSMEhEdXowZTdRNGg3RUF1eXlPS3RCV3pJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFJbDVRK0ZXeE5abUltMmU4N2wyNXRhYUg1SHYzZldadlpCeVl2a01VR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ6ekNpazF3SnF1QURxNGxaNWNkamZyMlRuWVBZWjY1Qk5ZZkhnbGFmbEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ013SWo2TUhxMFFzV25OKzFCeEhkMHZ4VUkwQit0SGRGNEszMXhBWmdrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjBvY3M5eFA1MEJmbUlNekxUWFN4cWwwV2kwRGdod0NxY0ltdFpzU2lGcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNvNExHYkgwTlpkZ0x3SXhycFhLTlRYM3cyQlNWR2VXNGduOTRrT1lFV3lXUm9wZG1uOCtQQWo3OS94YUNwQm9wZlYyMCtENDI5V3Q3Y0JOZDIyRWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6Im52eGd2enNVQnE1dU9mZEo3Y0NxazY2RWo0RDR2WjZ5L01pNlM4SHFud1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3OTMwNDA5MzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkY4RDI0N0Q5NEU5NkQwOTNCRkNFRDAxQ0JEQUM1OEMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzA0MTMyMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDA3OTMwNDA5MzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTIwMUYzQTEyNTQ3NjVDMkRDRjUxNkM5MDkzODBGRDIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzA0MTMyM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaGtFaHJweXlTZW1TSGtKY2F3UkNTQSIsInBob25lSWQiOiIwMmQzOTYxNi1hMmQ4LTQ0MmEtOGIzYi0yMDRkYjg3Y2YwY2EiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1FFcXpuRGFCODFzTFZSeW9xZWpzazhybVNZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZNYnovdnJibWhRaHhGTXM4MkVPWVRya2s0cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGSk01Qk1YMyIsIm1lIjp7ImlkIjoiNDA3OTMwNDA5MzY6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiWGJpaTIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09ua2k2TUVFSnFNenJVR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhCaTBoaUtDd2RJbWhQTThZQkUvd2tSYTdKbVlsbnBObXYxTExERFNWZzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6InB2ZDlUeHVhNjBsWGJVcUNzZElkbGg2ZnJNY0ZYNFJYOENpT1NvZG5ZMjNsTW50NEg5RzIrRmlkMFgzVXI5UGdaT3g2SVVFYWxMeGNleEpHUUFVQ0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxdE4zRm9BNVB3TnU2SXBRWFloamJYd2k1eVBvZUg5Y2o3Z1g1QVNEeXZBUVdwcnJMNjRMbHpiL09zbG4wUXBuZE5rRmdFelJCS1kwcXBmUFZVUmNqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQwNzkzMDQwOTM2OjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllRWXRJWWlnc0hTSm9UelBHQVJQOEpFV3V5Wm1KWjZUWnI5U3l3dzBsWU8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwNDEzMjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQVd6In0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "0793040936";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-Vxbii2`",
  author: process.env.PACK_AUTHER || "QUEEN_xbii2ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-v19xbii2",
  ownername: process.env.OWNER_NAME || "xbii2",
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
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
