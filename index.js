module.exports = {

    //available methods
    search: require("./lib/search"),
    getInfoFromURL: require("./lib/getInfoFromURL"),

    //unavailable methods
    getNews: () => { return "Not implemented yet."},
    getAMV: () => { return "Not implemented yet."}
    
}