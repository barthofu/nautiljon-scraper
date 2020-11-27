const requestPromise = require("request-promise"),
      cheerio = require("cheerio");

module.exports =  {

    async req(url) {
        let $ = await requestPromise({
            uri: url,
            transform: function (body) {
                return cheerio.load(body, { decodeEntities: false });
            }
        });
        
        return $;
    }
}