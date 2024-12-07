const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUy47iRhT9lVFtTQe/3SC1FGzADTY2YAw20UgxdtkUNn6VbTAtpEj5hXQmG5JZZZF1FtlFyp/kD/iEiG5aPYvMpLNyqVx17qlz7rkPIE4QhgqsQfsBpDmqnAJelkWdQtAGYun7MAcN4DmFA9qgo5eVs+VF1ZwvRuPNvDuZ8cRMbfbUlbPt2FVP39HdiKYg2bsDxwZIy1WE3C8AzvepME5cokXrG0NUM6fL8QfONjkKOrs0pLO+W2XdXQXX5h04XhAdlKM46KVruIW5EymwHjsofxt9R6sHvaVPTLwprnabw7a5Tm1JbCpmf5ZP+HnaHJirjDlMFp230R8OSpvHXDbWyglZZ7G27k0MjkjLwKR7VVqzIloFQd8k490zfYyCGHoDD8YFKuo36z5Sp6LRst2Al/EoNcJAYA6qvhsOJWvFb9KptacEvbVBVrR7G3F/1wuZfik1IR42KQVLI2zMB4vbjBZzA9kxwdUsM73dItH+lPg4f+mV8P/o7uoCzkldSwM6jXdFKWih0QmZcq8oZMt0SDj2bT9o3s7eSl+sWmWoeMraksOqzyx5X5nl6zgubUIJloFebKddToYTPeq90neKMv8Sy4lGHTQtmVplEznimuAmoe3ZpLXZy2G19ceST6wOo3opTrkSoZrnCMmlg1G1QUND6fELsZKJUJGs8WpdQX248YmEXU/unl4UwnrggTZ1bIAcBggXuVOgJH7a49kGcLzKgG4Oiyd5Ab1QZS1j4MKQuD1PRxTR5JtBqyUnpU0mMn9L0WJyXyk9Hd+BBkjzxIUYQ+8e4SLJ6xHE2AkgBu1v3jdADPfFs3GXcgzVAD7KcWHGZRoljvfi6stPx3WTMi6MOnalywLmoE2+bsOiQHGALzqWsZO7a1RBae0UGLR9J8Lw2AAerJALL3jA2+1WZdfcT2+UxJqH9r0yiLLgQnmdxM9HaE+AHBTcG0qgvBuW8ugbh3fZmxZFk5zHsJwgeKAB0DUzlzuftZANpcjLjIErWHxLHE8kc9gaxxIndQdPNjxrD3PogXaRl7ABVo4bluksCWH8BVz6wFhEt4yq/apZ77pmoMzNQX8wVRn8Ce6zp6D98DqnpMS74E3nMqd1l/egAbZPLYguL+fIFkuRFHXLM22K/hp/tbvo6KTpVzEsQAPEzuUwuPn27+9//ev3m/Ppw8fz6cOf59NP3707n37443x6/OV8evx4/f52Pj3+fD49/vhy4Z2KiiKC7yq0gheWVwsv9T1YOCjCoA0kVbgldVvujbOBsApludMLOlLQAa+Wv2TnuTflls+rqppq28Te1hQt7clRh4k9jYIalPSE0HWtm6JZJrl3/wIC2kDdjlduHcUDohLWNt+pOuaez80WjfeqKiIKGWTKWiIjYqt1j+0lZNkCpcOilji71zTFZa9TaWXf1LVUOjS17DBhuc4laC+t92mxVO77Q2K5MVxZKieWEASc2QsXkTbgRHl3H9byvlxkxjLkog1ndruM680Fb7Qqxlujo09YtbbGaMwqPO7mk2U6I6pVFlxT/TRVous0R095e7g2qo/g03C8evhfVr9Ghjw2PoG4TtvPjcFpZRGorvnZMpOHuPAC7HU7GsfMPGtjBZtsvNlsJrwd8kEMjsf3DZBGTuEn+Ra0Ad6uHNAAkYOLzmvkZ2gLceFsU9CmBIZqMQJLccd/ACKoV6IoCAAA',
    PREFIXE: process.env.PREFIX || "*",
    OWNER_NAME: process.env.OWNER_NAME || "Vicky",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 50941011863",              
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

