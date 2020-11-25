const scraperObject = {
    url: 'https://www.nautiljon.com/search.php?q=test',
    async scraper(browser){
        let page = await browser.newPage();
        await page.goto(this.url);

        await page.waitForSelector('.gsc-result');

        let urls = await page.$$eval('.gsc-result', links => {
            links = links.map(el => {
                return el.querySelector('.gs-result .gsc-thumbnail-inside .gs-title .gs-title').href
            })
            return links;
        });
        console.log(urls);
    }
}

module.exports = scraperObject;