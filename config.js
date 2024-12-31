const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU23KqSBT9l37VHLmpYFWqhosKIoqKF5w6Dw00F7mGbkBM+e9TmKSShzmZDE9d3fTaq9dae7+CLI8w0lELJq+gKKMaEtQtSVsgMAFS5fuoBH3gQQLBBPBrNW3HMucPfU7sZeQw0zdeoULKuQUNjYJbqrQJd7GzmHsG9z4oKieJ3G8AoVvao3ypDVrCrm20Ca/csFkGkpJqxxJH9oa91XjTeMl8+gzuHSKMyigLpkWIUlTCREetCaPyZ/SN+XrI6cqFrMP4ijbBIqWni+zootVgRqxwiQNVl47SjlHtn9EPYaMrfmXsjJXIFcp0bWWqxNJewRBXbI2Ml9h41hw8V6Te6OMoyJCneSgjEWl/rPtetC5zPA70nnRwQiGN5TLSrNkhFU3aMWQBMufBrLEPLvVD4gOXGqhHQV/3dP3s1Co+ZCtUh1ZuR8pBuMSbq53t1Q13tPBX4mb5kZX4/+gOZSe2ocZb6SyG6y256EdGhLVOVpBjhps1YgVJk8OWPzQ/o38diXwbHRNJlnDInFru4lx5C1HXozDEw0F1c1cunXKOrWqf9CGpyu9YcuhSbOPe4mXczoPD8WAKZ5vLt9SBFtWVKTVD25kzyj6IkF2w7H6fJgs6fWFjgyr2PcctuSO9yrZKc4ZpoK7yQr/MkrB5frwoRq3mgQl974MSBREmJSRRnnV7DCf0AfTqHXJLRB7ygrU2KKjg9HKKvGVLbWtoOszKK25eUgjSOR+0uZTQeAxHxvQZ9EFR5i7CGHlqhEletgbCGAYIg8nfv/sgQ1fyZlxXjqX7wI9KTPZZVSQ59D5c/TiErptXGdm1mSt3C1SCCfW5jQiJsgB3OlYZLN0wqpEcQoLBxIcJRvc+8FAduajDAyhYWN7Vqiz80py9wDVURthsOsphnr39QvG8zwn+6GlI+fwT5zHDJweO3ScP+bRHsy7nshD0QfTeM92dP+eC3h+uMBbVmbLd95YNnm5wZeVUuMgfNrxpj0rkgQkpK9QHDnTjqrDyGGXf4GqJYjWtQKoRyrbbGzOsTnAzcE97rfmC++YpmLx+zik59zo8fjOX7Sm/AH2QPiIYdS9nWHbIjhlBoHlqQlN/4V9NJyQsil8ZIh3uu+jdDQ8RGCUYTIBsXg68hpdT45jmSzyfi0YgyoEIPk36SPtbmmJs0j2sbZapZN7cQcQd0MwkLbtBsWJYo/p0u+X7tXk5Jtrzv4CACRifSiPrGRe/GRl0smsl6bpiNCXjx3U2rJ0YlZbf+gyDrrowOO285UzPo30v5YncDNwayonvkxOcrYfnpWWawbY9+EHw3FV7C8vXYnVo2LPLoI2DmzPzxsiDHlcX8eLoL+VpRVPXgsPKiDYVvbjy53Ww8obIDjNZpHoMj2BFLehjupZ8Ta2dEbZW+mh5DN778DEHkvf5Gz065PU9Wn6EHuMsg51F/2XO15RT9/4XjPcB+YckSeelIvilPJWHgcWzJlfNTqE1dgmlFuJt2itpnh/NlAtHFztwv//ugyKBxM/LFExA9Oga0AcJxET87FMrShEmMC3AhB6zHD9mBVbog7QVi2JHIPlobyB2n+Kb4P4PcXlFP/oHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Phemous",
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

