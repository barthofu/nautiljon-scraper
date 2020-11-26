const puppeteer = require('puppeteer');

module.exports = class Browser {
    
    constructor () {

        this.instance;
    }

    async start () {

        try {

            this.instance = await puppeteer.launch({
                headless: true,
                args: ["--disable-setuid-sandbox"],
                'ignoreHTTPSErrors': true,
            });

        } catch (err) { utils.error(`Could not create a browser instance =>\n` + err); }

    }

    stop () { this.instance.close() }

    async newPage (url) {

        //open the url in the virtualized browser
        this.page = await this.instance.newPage();
        await this.page.goto(`${url}`);
    }
} 