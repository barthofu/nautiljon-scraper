const Browser = require("./api/browser"),
      Scraper = require("./api/scraper"),
      data = require('./utils/data.js');
      utils = require('./utils/utils');

module.exports = class nautiljonScraper {


    async search (query, genre = "anime", totalLength = 10) {

        //check if input
        if (!query) return utils.error("No query provided for the search.");

        //check for the genre
        if (!data.genres.map(e => e.name).includes(genre.toLowerCase())) return utils.error("Genre is invalid.");

        //limit the totalLength
        if (totalLength > 50) totalLength = 50;

        //create the instance of the browser and open the url
        let browser = new Browser();
        await browser.start();
        if (!browser.instance) return;
        await browser.newPage(`https://www.nautiljon.com/search.php?q=${query.split(" ").join("+")}`);
        await browser.page.waitForSelector('.sc-ifAKCX.dvvOSu');
        await browser.page.click(".sc-ifAKCX.dvvOSu")
        await browser.page.waitForSelector('.gsc-cursor-page');

        //scrape the urls resulting of the research
        let results = [], page = 0;
        do {
            results = results.concat(await Scraper.searchPage(browser.page, data.genres.find(e => e.name == genre).apiName));
            page++;
            if (page == 10) break;
            await browser.page.click(`[aria-label="Page ${page+1}"]`);
            await browser.page.waitForSelector(`[aria-label="Page ${page}"]`);
        } while (results.length < totalLength);

        console.log(finish)
        return results;


    }


}