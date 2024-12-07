const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVXXOqSBT8L/OquYKggFWpWgRFUfADRGXrPozDgCOfDiBgKv99i5hU8rA3m+VpamD69HT3ObyAJCU5XuAGjF5ARskNFrhdFk2GwQiMS9/HFHSBBwsIRgDKQVS6AmMuazL0LsxR0pcwcGeGhTq4XJnqVlyuDxfu7jDP4LULsvIUEfQNYHPfx2fSOXZUUZqWtmAMzPrAHVHEjcVmEnt0xvLVnTSK1QK2iJBQkgST7IxjTGG0wM0aEvoz+v1JJawYpqq5SyPbt4s7aNZxcqTqorOR6DDsmbuek9WO6Rg/oz+vOgtNyfRVX0rFQ6b2jTW9zeA+5BOyQ0voTCQ2ci6DjRo+6OckSLA393BSkKL5se6W1rBaFN/PJzYw0lpP1qkXb0pmEh3pHOfHdeirau/iUm33M+KTc8/flLVzJKTP0vw8tvi8j/tiX0mEnW4cpF3hlrVyO7LHr8TX9CMr4f/RPV80U2m3JIsp5XrKxFFOHI/RvXO19B0O8t3RDGXvrtQcc/wZfa9GnZCpqFF5dqlFyB7E2d3WTeuom2mn5neH7VaQNCfabz7pw6Kk37EcTDitXl9nrl1YAsqmB71zZNkT1MPDwQ0n+Z25yHJHFvEiWF/6qYgjx95Iit4bonglM0OWZo05wXe/aq7X2NG356Eoy89vNwpxM/fAiH3tAooDkhcUFiRN2j2R7wLo3SyMKC7e1AW3eT3NmBN1GdsWktyJE/HM6aGytUt9UZJ4VpeTVbqqhCnzDLogoynCeY69GcmLlDYGznMY4ByM/v7dBQmui4dvbTWO7QKf0LzYJWUWpdD7MPXjJUQoLZPCahKktAtMwYj53MZFQZIgb2UsE0jRmdywcoZFDkY+jHL82gUevhGEWzywMuRwEoiBPdWWlTI3VDTNs6ClfE6TxycMxkPfg/CpL57EJ97n/ScJ+uIT47MMYgeIhScJdAF5b5n2zB8ddM/bzbTpIYZE1VrIV5fNcYycueTx1ZsLD+kxxR4YFbTEXXCCKCwzOw1x8g1uhoyoGUfWPutfdldkrViXadJl0HE3X3AfloLRy+eYUlKvxbNcm9UH3BB0QfyWQNLevD/gBb4/FHiWE0Z9/q/8V9UKCbPsV4KLFvdd9PaEhwtIohyMgGIcFMlA04k5XDNCqmlyHshKIINPkz7C/kiTt+bukbDjOp5WrrY09Bs9S/rXAecskJYgV126O1zPhwaZP/8LCBgB87wkt5UcbrbSLu5wmMeChKtAMXzflG6QXVamttiEaeIypjXdpyf1JMmiuORduNZ8Z3O/eZ5ZDhm0mshWyFWMuvfUzXNb7RGWr8XmE3Vz9nMVM1yM5vz4LF7mdaKpA6rh037aOYuWnq2nMts5rASErkObenuXuTGQBOIA1nvJcQ+oFu4XP0wsS7QEqqnVow3fxkD0Pn7JW4e8vEfLJ/htmiWwtei/zPmacua1+wXjfT7+IUnjgy2JA8yavWRLLyEczEQCXelaeqyVjDNO2zR9Z5Zbq8ucgNfX312QRbDwUxq3f9/EoynxQBdEMC/kz0a1SYzzAsYZGLECxw0ZiR9wXRA3cpZZBSw++hvI7bPwbPD6DzdMnjT6BwAA',
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
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
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

