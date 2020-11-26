module.exports = {

    urlReg: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,

    genres: [

        {
            "name": "anime",
            "apiName": "animes"
        },
        {
            "name": "manga",
            "apiName": "mangas"
        },
    ],

    defaultOptions: {

        anime: {
            format: [],
            formatExclude: [],
            genres: [],
            genresExclude: [],
    
            year: null,
            airing: null,
            finished: null,
            tba: null
        }
    },

    optionsConfig: {

        anime: {

            formats: {
                queryPattern:"formats_STATE[]=INDEX",
                type: Array,
                data: [
                    "tv show",
                    "oav",
                    "movie",
                    "special",
                    "ona",
                    "music"
                ]
            },
            airing: {
                queryPattern: "enccours_STATE[]=1",
                type: Boolean,
            },
            finished: {
                queryPattern: "enccours_STATE[]=2",
                type: Boolean,
            },
            tba: {
                queryPattern: "enccours_STATE[]=3",
                type: Boolean,
            },
            year: {
                queryPattern: "annee_min_aaaa=MIN&annee_max_aaaa=MAX",
                type: Number,
            },
            genres: {
                queryPattern: "genres_STATE[]=VALUE",
                type: Array,
                data: {
                    "action": 28,
                    "aventure": 2,
                    "biographie": 33,
                    "comédie": 1,
                    "drame": 4,
                    "ecchi": 6,
                    "erotique": 14,
                    "fantastique": 24,
                    "fantasy": 7,
                    "hentai": 20,
                    "historique": 22,
                    "horreur": 30,
                    "josei": 19,
                    "magical girls": 21,
                    "mature": 53,
                    "moe": 32,
                    "mystère": 29, 
                    "psychologique": 23,
                    "romance": 13,
                    "school Life": 16,
                    "science-fiction": 3,
                    "seinen": 11,
                    "shotacon": 25,
                    "shôjo": 9,
                    "shôjo-Ai": 18,
                    "shônen": 8,
                    "shônen-Ai": 17,
                    "slice of Life": 10,
                    "space opera": 34,
                    "surnaturel": 31,
                    "shriller": 27,
                    "tournois": 5,
                    "yaoi": 15,
                    "yuri": 12
                }
            }

      
        }

      }
}