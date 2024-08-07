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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFGUEpvQVcxcWxSY2Nobk5UT21IZkhNK0RNd3orUjNIdzVGQWdoYk9sbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3NYZjdrTkkzZ2NzbXJVY3RLRHJLODQ2V0d1a0d4eS9Nb3lrQ0NiVHBIUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQ0lkQzFYUUJocGRqQVIzZ3pkMXFrdzVxYW9YT2ttcFRHZkNhTGI4RlgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnd01xdHl6UTF0MDBXcW8yZ0dnWk5qMGdudzBkaWkrV3hCTjVGSVB1eFY0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVMSmlCaGFIR0U1ZkVWVC8yTkxvVmVoR1RFV3ZRZmRkaUFaRktRY3hRblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVoS1diVWNPQnZyT2RJckFCR2NCYUN5Y3Y2L1hoaWVXVkU3ZW5OcmRSaWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0F2TEtDN2p3YkVYd3ZjSWpXS1Z5cXpqQmxNai96UGt4SUNya0lzaEhrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWm9uTWZIb0tDY2lOUjVqSzdNbHVKNHEvSWhDdktiQmdZdVBoQ2VSMGhtbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBBU3hmd05GNDZrRlIzaVZhTXJVTnNuVzRPVjRNT3RoSXB0UGhCTzVHS05aLzhRNHd1bXRUVlgvMWcvVG5CQy9PYmdIZWIrKzJOSktiOUlyTWRzVmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJ1WGlqWTEySFhib0hNVmxQTXNJUUpLczZTL3pzVndwZTVSbktLUWZXSDJvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYMll2YVdyU1FVNnhBc0RSa2h6SmJBIiwicGhvbmVJZCI6IjBhZDE3MGIyLTliNzMtNGE2Mi04ODllLTFhNDE0ZTQ1NTM1ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYT2doZGFvNnVuR0RKT0RjdjNsSVlIUHJ0dms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tDVDQvQUVkQ2laMXRubTNiQmJWUy9QMjIwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFMVEI1UlRKIiwibWUiOnsiaWQiOiIyNzc4MzQ3NjEyMjoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSaWRkbGVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNON0J6bndRdTZETnRRWVlEU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2WnhqZkVOS1pYWHZaYnhmb1BTV3VFbG4wTmlZVWxMYURZV1cxeFNrQWtJPSIsImFjY291bnRTaWduYXR1cmUiOiJ3d0NzNnRiTjlzL01jTStkdW50eERKQU42U1g1WFliMWl3dWNLR2lqV1kyTXFUTVVTMGRKdmdLMnZBUkNDc1l4RlBnVm5IWEc3cFRVTFBaS2QrZk9CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUDdDa0pxQjlXM3VHZjBKZ1VwMzI1eDhyYjd6d3BPTVdRTW5vbUtTWEhFZVVra0hDWm9xOFFKang0d1ZwaG5HZ0l0N3ZZYlVnRDFnQUM2ZkZLdi9kZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzc4MzQ3NjEyMjoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiMmNZM3hEU21WMTcyVzhYNkQwbHJoSlo5RFltRkpTMmcyRmx0Y1VwQUpDIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMDI3NTMwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJaKyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
