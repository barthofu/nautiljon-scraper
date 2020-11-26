module.exports = {

    async searchPage (page, genre) {

        //await for the results to be fully load by the php request of the website
        await page.waitForSelector('.gsc-result');

        //grab urls
        let urls = await page.$$eval('.gsc-result', links => {
            links = links.map(el => {
                return el.querySelector('.gs-result .gsc-thumbnail-inside .gs-title .gs-title').href
            })
            return links;
        });

        //filter urls matching the genre
        urls = urls.filter(e => e.split("/")[3] == genre);

        //return final rendered array of results
        return urls;
    }
}