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



/*
const req = require("request-promise"),
      cheerio = require("cheerio");

const options = {

    uri: "https://www.nautiljon.com/animes/?q=one+piece&annee_min_jj=&annee_min_mm=&annee_min_aaaa=&annee_max_jj=&annee_max_mm=&annee_max_aaaa=&annee_vf_min_jj=&annee_vf_min_mm=&annee_vf_min_aaaa=&annee_vf_max_jj=&annee_vf_max_mm=&annee_vf_max_aaaa=&licencie=&nb_ep_min=&nb_ep_max=&duree_min=&duree_max=&public_averti=&editeur=&societe=&pays=&titre_alternatif=1&titre_alternatif_suite=1&titre_original_latin=1&titre_original=1&has=&tri=0",
    timeout: 10000,
    transform: function (body) {
        return cheerio.load(body);
    }
};

(async() => {

    let $ = await req(options);
    console.log($("body").html())

})()*/