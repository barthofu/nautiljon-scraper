const { req }             = require("./api/request"),
      { dataPageScraper } = require("./api/scraper"),
      utils               = require("./utils/utils"),
      { urlReg }          = require("./utils/data");

module.exports = async (url) => {

    url = url.trim();
    
    //checks
    if (typeof(url) !== 'string') return utils.error("No url given");
    else if (!urlReg.test(url) || url.includes(" ")) return utils.error("Invalid url");

    //get the html of the page
    let page = await req(url);

    //scrape it
    return dataPageScraper(page);

}