const requestPromise = require("request-promise"),
      cheerio        = require("cheerio");
module.exports =  {

    async req(url) {

        try {
            let $ = await requestPromise({
                uri: url,
                transform: function (body) {
                    return cheerio.load(body, { decodeEntities: false });
                }
            });
            return $;
        } 
        catch (e) {
            console.log(new TypeError("An error occured while requesting this url."))
            return cheerio.load("<body></body>");
        }

    }
    
}