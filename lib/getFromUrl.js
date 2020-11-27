const { req } = require("./api/request"),
      { dataPageScraper } = require("./api/scraper");

module.exports = async (url) => {

    //get the html of the page
    let page = await req(url);

    return dataPageScraper(page);

}