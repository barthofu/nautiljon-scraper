const cheerio = require("cheerio"),
    puppeteer = require('puppeteer');
      
module.exports =  {

    async req(url) {

        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setUserAgent('Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0')
            await page.goto(url);
            const html = await page.evaluate(() => document.body.innerHTML);
            await browser.close();
            return cheerio.load(html, {decodeEntities: false});
        } 
        catch (e) {
            console.log(new TypeError("An error occured while requesting this url."))
            return cheerio.load("<body></body>");
        }

    }
    
}