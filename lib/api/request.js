const reqPromise = require("request-promise"),
      cheerio = require("cheerio");

module.exports =  {


    async req(url) {
        let $ = await reqPromise({
            uri: url,
            transform: function (body) {
                return cheerio.load(body, { decodeEntities: false });
            }
        });
        
        return $;
    }

}