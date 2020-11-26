const reqPromise = require("request-promise"),
      cheerio = require("cheerio");

module.exports =  {


    async req(url, totalLength) {

        let urls = [];

        let $ = await reqPromise({
            uri: url,
            transform: function (body) {
                return cheerio.load(body);
            }
        });
        
        let scrapedUrls = $(".left.vtop > a[href]").toArray().map(e => { 
            return { 
                name: $(e).html(), 
                url: "https://nautiljon.com" + e.attribs?.href
            }
        });

        return scrapedUrls.slice(0, totalLength);
    }

}