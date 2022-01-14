const data = require('./data');

module.exports = {

    error (text) {
        throw new TypeError(text);
    }
    
}