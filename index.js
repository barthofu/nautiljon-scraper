module.exports = {

    //available methods
    search: require("./lib/search"),
    getInfoFromURL: require("./lib/getInfoFromURL"),

    //unavailable methods
    getNews: () => { return "Not implemented yet."},
    getAmvs: () => { return "Not implemented yet."}
    
}