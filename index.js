const NautiljonScraper = require("./lib/nautiljonScraper");

let nautiljonScraper = new NautiljonScraper();
nautiljonScraper.search("one piece").then(console.log);