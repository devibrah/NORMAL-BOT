const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW4+qOhj9L33V2XJRQZNJDnJRFBUFBT3ZDxUKVK6WguLE/77DXDLzcPZkzltTyurqunwvIMtxiRaoAeMXUBBcQ4raJW0KBMZgUgUBIqALfEghGANHo04fVquCqgzMwlLBHaPgWS8Lo8LwuQVTBwOnqqx9xjyDRxcU1SnB3jeAfVc5H/aT6u7t1pLj36uFlnlk2ik10WDqTmdyO3DErW1T1Z/Bo0WEmOAsVIsIpYjAZIEaE2LyM/rXWUbFvRyVXBItGy5Vz1JW70c7xpndytmRCxl92JnkcrFf/oy+7iyMmSJHijPwtXR9EZazkGeOk5uyXxP5Hpu6xtj6II7lwxv9EocZ8nUfZRTT5se6S6bUt1bGwdvdjR6KekEqca7Eo051RE3Oy56t9heFccO7zc+ID6xjf5U2btmriB7qq8VBYenVCLLgqMtq3xdsR5Entriwyq/ETfKRlfj/6I5U5up6t3Vd8R0unWCUsL2q8qPgoru62mFq4viUUyjh+j+jf5QhRj6b8+voqIoLtUa9uebfqKxtHD2/sYtjcGzYot/Y0id9SCvyHcvsdJHCs6btjKYp/UBaXq15fXOXxpSdbc2VOzwXLrFcD11vNd6s84UAsXvqu2erJ+2X67mOWI+ZudIk67BHLVk7gbySwufXF8Wo0X0wZh9dQFCIS0ogxXnW7nHsqAugX1vII4i+ygv2nWI4DCaGg7eE6obiYNnW2TUv3ByXsn39yI2mZhxfvcvmGXRBQXIPlSXyZ7ikOWmWqCxhiEow/vd3F2ToRt+Ma6/j2S4IMCnpLquKJIf+h6sfH6Hn5VVGrSbz5HaBCBgzn9uIUpyFZatjlUHiRbhGcgRpCcYBTEr06AIf1dhDLR7gHenuW+HagulwwG/riahvnzYt5SjP3o8IAjsU0ekpYLjRU3948p9Goh88CQEjsqOTwAqsD7oAv3em/eevFm4PfLBd53GE2U28u6fXpqyIw0/lNH614U17RJAPxpRUqAtO0Iurws5jlH2Di+0VEXdXYh4uvbuqeNZ+wrH1NDF05gvum6dg/PI5p+Tcb/HmvCOIsn0AXZC+RhC3Lx/1BY5lhjzfZ8ejf8pf11ZGWBS/MkRb1HfJ2/M+ohAnJRgD2cB1szpo6tJw4hMznUqbUJJDCXxa9JH1tyzx0GXnA7FDtqqys+cn7nyMdGhJxWqwPMcRTmbXc537qhVLz/8B0hbjZiSDKteU83DuNND3F7rjMdDoVaNOnmkGNWtfjmKrjNKmYGAe6fpQLC7eiMqQFFuc2MVmVCtcbc0vtmT2VZdPJem5ve0tKl8vY52D6KzSe3ip9JWpm6s8Fg/uhTklR5gve+5S1k6yFPFqr6rPE0VYbvFNrTrCsWfylT4PDc00PGauKgdOt0w3CcKYlaW3Fr5OgeR9+uLXfry8ByvA6HWYZbA16HtrviaceXS/ILwPx7+kaOJzychCgXlhthKrNs4o5w7WNA4XNrL1gX4otqIuDGdbtZDA4/G7C4oE0iAnKRgDmPkkx20TElhS6bOkNk5RSWFagDEr8KLIiUNOePwBnbcQB9oHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Yashmika Rasanga",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "Yashmika Rasanga",              
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
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
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





