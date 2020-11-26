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
        
        return $;
    }

}