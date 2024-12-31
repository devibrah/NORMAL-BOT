const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVXZOiOBT9L3ltewT51KquWlRARVsUpdWtfQgkYJQvkyANU/73Ldrp7a6pmalenlIhnJx77jmX7yDLCcMOrsHgOygouUKO2yWvCwwGYFhGEaagAxDkEAzAw9Ttcn89Us0JUdZmLOfifLuPHTI802hNhNf1VFitSdNkiydw64CiDBIS/gHwxXbq3YJ5RTLrqhum9J2TW5FQuc64gF5Z7bu2oEaZ3TfZE7i1iJBQksVmccQppjBxcO1CQr9GfzlEi2OV65I8doyT5wULvM2zlbgcWxOdxUqpB/qhOjxXu9XX6J/H5nG7Vr3ZjM2oP9R7L0d1NFOtiy1Qq8q90zntSuOlbx6FO31G4gyjKcIZJ7z+su6LoRcqwx0SZkhI/TiTYgmNXMeUqt5WHq9jzbZU4kaV60+/RlxXNFdsqniX+o4SJWyjEOig5BKc+sb4ur6UM7banFEChdVn4i5998r5/+guL1YPUyUuKNmcN5OJPnP8Z5LU8XScpb3LsoszgWjDF5uk8dfoH4yEJPveUOo79PDa9RpNf8ml3qQ4lrP6pTgt/KJWKytE9v6DPuQl/RNLzi+vypownsDAEOdeQ5wkCQVDdLzU0LCz2yBTNYxou/QUPaPwENZ9Ewk7adRvkIlh2Q8ny3lcLUUTkd56NKXQGBtPbxWdcT1FYCDeOoDimDBOISd51u5pegdAdPVwSDF/Uxd4SVafu+v99iFL/DZVmqrMgxQ1xirYynt3erWaKBhmfCo/gQ4oaB5ixjCaEMZzWi8wYzDGDAz+fmtUWzPFac7xjCAwAH1ZkyVN1vqi9Bf7Vh0hZ7AovmWYgw6IaJ4uMBhwWuIOeDvf0zRJsAxBV01B1cSRrGs9WZMtTdb7qm7KbYHp/c4NSTHjMC3AQNQkRZR7PV2+/dMBGX7ld/e0NUtiB0SEMr7NyiLJIXq31vtLGIZ5mXGvzsJRu8AUDISPbcw5yWLWFlZmkIZHcsWjtg4wiGDC8K0DEL6SELd4IK7I5eDT63oFXwTjah8PgnyKW+GOeXY/EmFJlaAaPPaiIHyUIyw+6kKoP8qKEPTUKII9UQetHPfgtt/81keuvRk9YPGBVbuuN3ISMWkWJJyy2fkezrsBMMXoXeUAhuey2ORnnP0Bd+y/PEfCqts355pAx7ir1KmvOZOLXX3CvRsLDL5/DMtRjlq8ydxyNwf3GbTdau/52QwD/Wc73P6TvD2PMIckYWAARs+4e5nplunSFzZntm2sYmMUG+CjRe+BuztaVlZHziv/7HOr4opoHop0stzbx2617Kt0ReMSVv54gU7m0y9AwACEyAgLb44uR0UILidrUg17UrNZ7LaZ0V16qM92pVNcOUO2nHjlNls25nblXq6GUu/OdXS+IkFcWvMRt/c1Gg9LUYGjNp3vVvl8WeRXHpX2p9e8aWa1TZxaPA21GcUVI/a8aU6wu7+Wy/qhe+TVqC+shYORUrV3Nk7qSUbFXg70Ihov1i4ngcyvU2EpGdV9FLyNouTHL4D8SOndWBHBbxM1g22D/tyazw4Xbp1PCD8m9G9cNMTL7TQIQutgBetwjtHahodjkw7zSB9f8UVw5HnKrFUz2b+CWxvdIoE8ymkKBgBmiOYEgQ5IIOPGR0h/kXut3wFpbRSFxyF/zzYw2sc5XsHtX/WPkVx8CAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "zeekerdamiru",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 94743747913",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "ni",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
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

