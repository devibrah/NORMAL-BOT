const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'Adams-2024;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdDczdmQW9SVUJqZGFZQ0wvZ2N2bkd4aUplOUtBaFVycWVlVVBWd3cwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3JoS3ZkdnF4cUFmYnAxdHIrQVR3V3RhcmV3N1llUVJyTVlZRjV2d1VrST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSUpDZm5qNHZUMFNUN1FrQTUwYlpTbjA3Uk96c0hJNXhHUUFucjdTZEh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSTkhNOFE1VEJPRmcvQlZoUU9KWlBqZ1NpTUl1dHBvTHp6eUxkR3YrWkRZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGODZLUHZETHNJaGNncVlDVHBaTG9GTTZYTEljRnRTbTZqaU9BQVUzM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxUT2RnUk1odmhkck1vWmp4Qyt6M1YwdEdTTWNPUHdHSm9nRjI1a01lMGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0swL3ovMnF1K1pVWkNMWkN3UlVuRmVOWDZDK0l1bHFKUXV0aHcyUGRuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHJsRmhzcndWS0svcmVwYTlVYmo5YVY1dlpOUERwTTRXOFU5OVRDTGJTMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlrcWZ0N29pMUlIdGQ4N1lianZ6am0wc28wQTVJV0FTT0UxQmNmQjlsWXZPbEt5S1BZdlFUQjhaVTArVmZVOXRXd2x3VWxjM1hSUXluY3IwTVpxaURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDcsImFkdlNlY3JldEtleSI6Iktka1dXeVZRZlhoZmR2RVpXSmdjdEFrWkp0TnJZTUlrcEhzQlROVHc2VFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldVcUJOVVNVUXRpT2Z3VXkwZlBxU0EiLCJwaG9uZUlkIjoiNWRlMTlkOWUtMThkNC00ZjBiLWEwMzctOTg3ZWQ2ZmUyZGZlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9BZ0JTem9VUisvMXRuNjZ1Nkh4ZDR6MFpNWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOZllaOHhwNXdVcElSYkhXK0xOR1hKUVBBR289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0RDNzJEODUiLCJtZSI6eyJpZCI6Ijk0Nzc0NjU5Mzk0OjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIpcbvCdkIhcbvCdkI1cbvCdkIZcbl9fXG7wnZCSXG7wnZCIXG7wnZCTXG7wnZCHXG7wnZCUXG7wnZCWXG7wnZCAXG7ipoFcbuKmgSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3VSdUpRQ0VON0x5N2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoicm9LclplaWRkMUl2QWVtb0J6c3duSVBHOVhMNDJGR1llNnRkUjl2T2xXdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTkYzcG1rTHFRTnppQVJwbnhucllocmZSQXhtaVFYTmxhYWpGbGRFeFVGN0paaDY4dk80NFhPYWVPTXlERXlwb1IvcGRvL25rcXpncHh3NkE1Qy8wQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkdaQ2lZcXVZOFdjR2tQSTBHekg0UXVDWG9hR29SZ1cxUDVoMjBPOE5oN3E0UGZHUUJRcnRjMVdjNE9vQno3M1Z4ZWg2NUlvZlc4Q1liV2QyRlNaUkJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzQ2NTkzOTQ6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTZDcTJYb25YZFNMd0hwcUFjN01KeUR4dlZ5K05oUm1IdXJYVWZienBWcyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTM4ODkwN30=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE : process.env.ANTIDELETE || 'yes',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

