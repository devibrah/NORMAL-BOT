const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.BWM-XMD;;;H4sIAAAAAAAAA5VU2Y6rOBT8lZFfkzvNFgKRWhog0GQhG5BtdB8MmB1DsElCWvn3EZ1udT/MvdPDk2WbOuVTVecV4DIhaIZaMHoFVZ2cIUXdkrYVAiOgNmGIatAHAaQQjADSSqPYonO6UN3x2ZqLSLseNpkjxarppcahPto32HP3uy3zDO59UDVenvi/AdzYp/FJWF2P29s0E+DAFq9nb6LJMeV6zkSArrYpa4WL3J30DO4dIkzqBEd6FaMC1TCfoXYFk/p79JfjGl8t2fSMutBM4cYqi6mYCXi4jHghprncrJtFa7WhXn6PviCS1aY3d4xJjPDayp0LZyNebtnxPNJx9rRXJWXh6OmBPzzokyTCKJgECNOEtt/uu6XVNu8aXMPzwibarurzNV5eG3QaT+hg2A6dg3dM7WYi7r9JfD8dW+OczeAtnRmJO/T83pYPFDs0yOyg1UdRXC+qtEXrNPtKfFV/eCX7P30/zNXMyYuhvSPTZeYN5HJvN+5gxqn77SrEnND420Wup+vd+nv0/YsdRtI0cFZxqmp7sT2m7nwhxEdJWouBMYv02qGr3frJ1D/pQ9rUv2MZCqk814ks+NzTbl5RZmYvd450isNDQSb7TVXHrRyNS9HazNoztoT5xTNZEasvpEoK/+Rqeq+64q25X8Kdze+QebNT5fntRRlqJwEYsfc+qFGUEFpDmpT4bY/j+wAGZxv5NaJv7QVPPXewgKtlyOhJzTAHIVswkx3dshuszqzL4jBpwuiWF0PJegZ9UNWljwhBgZkQWtathQiBESJg9PfPPsDoSh/CdeV4tg/CpCbUxU2VlzD4UPXjEPp+2WBqt9jXugWqwYj53EaUJjgiXR8bDGs/Ts5IiyElYBTCnKB7HwTonPiowwNMLOVGboa2vqv0Q0uzafByunSU4xI/rgQiFw7DkPvBM0LwQ5Bg8EOGMvcjFESOkXkxHIYQ9EHynpnun19KqGkXvt0L+EWG+WDCnY45dCVK0uHlYaxH71GNAjCidYP6wIN+1lROmSH8G1w7jui8ZYnYGiexcmfDo1jABs+KmHzBfWgKRq+fc0orgw7PNnX7RZFU0AfFmwWT7uUcL0iMxPGcOGSYEcv8Rf68dJ2EVfUnRhT0AYbddaCV0I//0IsC4gblXcF3NTqoAFGY5KS7NnWspvJNfbpvhfry8qLokaJFCvhU7yMGD5ud+aRKjekkkFk974lWawWkdys31OXr/XI7cc2cUW3nzOz8538BASPgHqmst9GLTeeTOcoOS7V3WJktK+Dtyj/tlrVleEqbTQRPzCoWvXhOG1s3fDaulEGFJgwcWNFBfNZ75x2z91vCZ6nSZebDRV+LYbnKjKtj7J/4s63M+U3l2O14cCQhnCVphQ7DAW+0bE9ahD2Vw8U1tVTTtqg7hlAU5/rT0bhu48VFaMpNIglPx3mziNaPgL4NiPx9MCdv0Xl991yYoLc59y7Gf6v26X/m3v8C8j46f+Ex1ZOF0+Fq22YYbKZhk1qp6a2IqHvbhcjecttQB4HiZkPZwOB+/9kHVQ5pWNYFGAFSeF1Ickio8plfJykQobCowIgd8hIjciwr9kHRKlVlU0g/Yg+U7punFNz/AYQRMPwSCAAA || '',
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





