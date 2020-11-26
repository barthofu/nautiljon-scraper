module.exports = {

    searchScraper ($, totalLength) {

        let scrapedUrls = $(".left.vtop > a[href]").toArray().map(e => { 
            return { 
                name: $(e).html(), 
                url: "https://nautiljon.com" + e.attribs?.href
            }
        });

        return scrapedUrls.slice(0, totalLength);
    }
}