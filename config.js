const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUWY+jOBj8L35NehoIZ6SWNhwhNyTpnKvRyjEGnIQjxkCglf8+IulW98PObO+bZXC5XFVfvYE4IRke4wp030BKSQEZbpasSjHoAj33fUxBG3iQQdAFF4fyUD4aUd7iiom0u7zO9dFpaTluydnyZOpGaLgZ4WPNzV/ArQ3S/HAm6A+AVWCOnB3i1DAIFV8YaLPJbjVItnhk5WZwPPakqQXHga6WpxdwaxAhoSQOrDTEEabwPMaVCwn9Hv2xw+W2tFqMiK9zTJqu84WTVZ3UGPEcB1edbGMskkKUJKH3PfrTU0oc3ok6o60dq+fdRdasqbsYHG3Bt7ZnpPLZli5COYysB/2MBDH2hh6OGWHVt3VfjZZ1aeHX+lKio/fc2l/QolgvBH2ItEVSC8u1a7qTsDUS1O8RP/mhhBZ7bzcJhKs3Wwc+/0ysfTaPddcQF8rqYpmRLBEYr74Sd+lHVk7/R3doEISMqxluW5VRzIhQ19NJSzqoGcznbh3UApevNqzS7Ox79DdnMxyqY52rB8osR53+wRMOm+0z5YbhRA5lbsbpgTnihaD3SR+ynP6JJXb980S0DRz22WiCOjtuMwzUmU6zXAuqKb+AcxS1+HRNheswGC+JLtFDeTqFsR1uD+VelDLM3JkYdPgE9/VwrZLYLF/uLzrhauiBLn9rA4oDkjEKGUni+x7PtQH0iiVGFLO7vOBa7fv92hluvQTxdjm/bl7DUc8NZ0P+MJWvrXoRL9fQNXv16gW0QUoThLMMewOSsYRWU5xlMMAZ6P79sw1ifGUP45rrOnwb+IRmbBXn6TmB3oerHx8hQkkes2UVI6NZYAq63Oc2ZozEQdbomMeQopAU2Aghy0DXh+cM39rAwwVBuMEDZhqQZe4vl0zw3Nr+Jx1T6vQaymESP37pIIwlDflPou+pT6IswidVO6hPsuprB83nFVkRQRuQ95lpzvzWwkKKNWPSZ4S6rc0xpJZwaSW14LuKdbfhoT2m2ANdRnPcBgeITnn6mpxw/AfcOJo7a8kvris+E7fLoLpc1Lxwr0WOvuA+PAXdt8+eMhKvwbNng/1mLsqgDaJ7BEnzckESeV4UFEWSO13+r+xH2egI0/RHjFkD+655c8DDDJJzBrrAcOKSOaJlua8n7ZDYds8KekbQiPrh0UfYH2E6S/x1YGirORbJ8RLknQGeXYP1qq9Lu2B/PfLP0a5y3QyZ5cu/gIAuULaB4nOmmkad2u+Mrgau5jOHI7TwjuFkpdgwEXf22J2X5lDeJ4VBlXq60QZSlFu2YO5SmfJbhRJdZM50SdVDUWFz/tLc9sjK18v6z5jNpenJaSmVPUGsdnvIL3Si98xyKRi7tUnt9Gz0egPBd/mVTsetwvV04m02Rn0sV7kkJuPqkBNdWh5wiL3BcqIHjzG818D5vX7JfUDe3pPlE3xvsxg2Dv2HN18zzt3aXyDe6/E3OdL32EOLslhbg3yYyMmEXTtHtOuv9TneDG2003wpmh5rZdBTwe32sw3SM2R+QqOmRWOPJsQDbXCGGet9jukriXDGYJSCLq90RF5RRE67/QJHWblq3AcAAA==',
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

