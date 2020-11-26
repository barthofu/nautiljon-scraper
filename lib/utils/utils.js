module.exports = {

    error (text) {

        console.log(text);
    },

    sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }


}