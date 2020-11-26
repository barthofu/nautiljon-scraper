const { req } = require("./api/request"),
      { searchScraper } = require("./api/scraper"),
      data = require('./utils/data.js');
      utils = require('./utils/utils');

module.exports = async (query, genre = "anime", totalLength = 15, options) => {

    //check the query
    if (!query) return utils.error("No query provided for the search");
    else if (typeof(query) !== 'string') return utils.error("Query must be a string");

    //check for the genre
    if (!data.genres.map(e => e.name).includes(genre.toLowerCase())) return utils.error("Genre is invalid (must be either 'anime' or 'manga')");

    //set a limit to the totalLength
    if (totalLength > 49) totalLength = 49;

    //get the html of the page
    let url = utils.urlParser(query, genre, options);
    let page = await req(url);

    //scrape the html
    let urls = searchScraper(page, totalLength);

}