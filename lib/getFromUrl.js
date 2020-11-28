const { req }             = require("./api/request"),
      { dataPageScraper } = require("./api/scraper"),
      { urlReg }          = require("./utils/data"),
      utils               = require("./utils/utils"),
      removeAccents       = require("remove-accents");


module.exports = async (url) => {

    //checks
    if (!url) return utils.error("No url given");
    if (typeof(url) !== 'string') return utils.error("Url must be a string");
    url = removeAccents(url.trim());
    if (!urlReg.test(url) || url.includes(" ")) return utils.error("Invalid url");

    //get the html of the page
    let page = await req(url);

    //scrape it
    return dataPageScraper(page, url);

}