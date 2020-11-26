const Request = require("./api/request"),
      Scraper = require("./api/scraper"),
      data = require('./utils/data.js');
      utils = require('./utils/utils');

module.exports = class nautiljonScraper {

    async search (query, genre = "anime", totalLength = 15, options) {

        //check the query
        if (!query) return utils.error("No query provided for the search");
        else if (typeof(query) !== 'string') return utils.error("Query must be a string");

        //check for the genre
        if (!data.genres.map(e => e.name).includes(genre.toLowerCase())) return utils.error("Genre is invalid (must be either 'anime' or 'manga')");

        //set a limit to the totalLength
        if (totalLength > 49) totalLength = 49;

        //get the html
        let url = utils.urlParser(query, genre, options);
        let htmlBody = await Request.req(url, totalLength);

        return


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