//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "downloading";
global.video = "downloading";
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
global.sudo = process.env.SUDO || "2347047067906";
global.owner = process.env.OWNER_NUMBER || "7047067906";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
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

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NNZ0xHRis4YVNueHl1Q3RuZTdraXZPdmhZNWNTdUdRb3Q1emQvTXRXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkNuYWxaZlFGZVh5UG1GbzY2Tkg0NWtuQ3FnbmI0UGgyaDdmclVscG54QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5R0JCQTZIRXA2Ly9XRmlYVkpVNmQ3TmdFSkVxbUptK1NRTjRuU1kyYUZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTm1wdGo2M1NHZkZlZUhGNTVqVlRjR3VjUC8vZ2x2Ukp4dzZEOFNCM3o4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJObjV4RzN4RFFobUt0cm0zOUQ4K1lUOWVUeFZHcTdVYlUvL0Q4cGNBVWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh6bXA1MmN4SFZIVkNaUS9hZ3lFVmZOL0NSZUNlQWhna1V0cUt2R3dkQkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09XMzBkaDh2VXk5QnNmeXNEbkRCQWtZMnptQU1OMWVub1NvVEdKNG8wMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHhPZUNLN2VuTzdjcUI0Wkt2eU1tOCsxNmliR3QyVGxCcGV2emVLQXIyQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMrWkpKa3daVEhWdkFWVGtLeGtFUE9PUzl3T2JYT3JhdVEwSHJ4KzlkcFplSWs0dTVHL3lsazBoa0pXa2FwZW12Ym9iM0tSWkxTOXE4R0dUVG51eERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJySFc3YzdWc2FFMFBzMitjNUVLYkxFUXpQa1lYZFY2WlZjWU9hdDdNR1BFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwRjZoUGdpN1J2ZVQtTUhXVlVUVUZnIiwicGhvbmVJZCI6IjYyY2FkNGU0LWY4YzgtNDI5Zi1hYThmLWNjMGY5MjA0ODNiZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLeDRBbTVQU0JOWk5LallnY0NWbG9xNTQ4SVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWE1FNEpneXZINUdYbkhIdmRiYWpTa1o4aEljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktHQVIxTktUIiwibWUiOnsiaWQiOiIyMzQ3MDQ3MDY3OTA2OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVG94aWMgRGVtb24ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p2c3YvUUVFSzZZdmJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZVeXEyRjBaRS9GNkJveFVIdXhLektHK2l2OXJFN0JXaHo0eFI4a0N1Z2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikw3U2NwNURVVkJLbFBkTGd4WkZuTWRocWNZeTVjSi84SDFUaUVDSE51RHFzcUZrdE9YeFZtSzJZUDl5UHFYWmxpNitQSEFuRWJEWnMwNFVTcFV2eEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRcFRZeHFoU041WVVJUEFmUWkxU1NUTjNCYjYzOWVHODFFNXU3TnZackhMZnJHY1liTW9kM0pYcmNrVGF1eFpOeHVIakJobUN5dmV5VkFvKy81RUNEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDcwNjc5MDY6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSVk1xdGhkR1JQeGVnYU1WQjdzU3N5aHZvci9heE93Vm9jK01VZkpBcm9KIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNzY0MzQ5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5oUSJ9
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`toxic demon™`",
  author: process.env.PACK_AUTHER || "toxic demon💍😈",
  packname: process.env.PACK_NAME || "toxic demon 😈💍",
  botname: process.env.BOT_NAME || "toxic demon",
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
