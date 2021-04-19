<h1 align="center" font-weight="bold">Nautiljon Scraper</h1>

<p align="center">
    <a href="http://forthebadge.com/" target="_blank">
    	<img src="http://forthebadge.com/images/badges/built-with-love.svg"
    </a>
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  </a>
  <img src="https://img.shields.io/npm/dt/nautiljon-scraper">
  <img src="https://img.shields.io/tokei/lines/github/barthofu/nautiljon-scraper">
  <img src="https://img.shields.io/npm/v/nautiljon-scraper">
</p>

> #### An unofficial scraping tool for [Nautiljon](https://nautiljon.com), a french anime and manga data website.

#### Table of content:

* **[Installation](#installation)**
* **[Use](#use)**
* **[Methods](#methods)**
  * [search()](#search())
  * [getInfoFromURL()](#getInfoFromURL())
* **[Data models](#data-models)**
  * [Search](#search)
    * [anime](#anime-search-object)
    * [manga](#manga-search-object)
  * [Anime](#anime)
  * [Manga](#manga)
* **[License](#license)**

------

## Installation

```sh
npm install --save nautiljon-scraper
```

## Use

```js
const nautiljonScraper = require('nautiljon-scraper')
```

## Methods

### search()

| Parameter | Type | Description |
| --- | --- | --- |
| query | string | terms of the search |
| type | string | type of search (manga or anime) |
| totalLength | number | length of the returned results array (default is 15 and max is 50) |
| options | object | options for search (all keys are optional and if it is invalid it'll just ignore it) |

###### *ndt: the **options** parameter is different depending on the type.*

Usage exemple:
```js
/* -------- ANIME --------- */
nautiljonScraper.search("One Piece", "anime", 20, {
    // All optionals 
    formats: [], //formats to force include
    formatsExclude: [], //formats to exclude (they're the same that you can put in the 'formats' property)
    genres: [], //genres to force include
    genresExclude: [], //genres to exclude (they're the same that you can put in the 'genres' property)

    year: 1999, //start year
    airing: true, //is currently airing
    finished: false, //is finished
    tba: true, //to be airing in the future
})

/* List of formats:
tv show - oav - movie - special - ona - music

/* List of genres:
action - aventure - biographie - comedie - drame - ecchi - erotique - fantastique
fantasy - hentai - historique - horreur - josei - magical girls - mature - moe - mystère
psychologique - romance - school life - science-fiction - seinen - shojo - shonen
slice of Life - space opera - surnaturel - shriller - tournois - yaoi - yuri
```
```js
/* -------- MANGA --------- */
nautiljonScraper.search("One Piece", 'manga', 20, {
    // All optionals 
    types: [], //types to force include
    typesExclude: [], //types to exclude (they're the same that you can put in the 'formats' property)
    genres: [], //genres to force include
    genresExclude: [], //genres to exclude (they're the same that you can put in the 'genres' property)

    year: 1999, //start year
    airing: true, //is currently airing
    finished: false, //is finished
    tba: true, //to be airing in the future
})

/* List of types:
anime comics - anthologie - global-manga - hentai - josei - kodomo - parodique - seinen - shojo - shonen - webcomic - yaoi - yuri

/* List of genres:
action - aventure - biographie - comédie - crossover - drama - ecchi - erotique
fantastique - fantasy - histoires courtes - historique - horreur - mature - mystère
psychologique - romance - school life - science-fiction - shojo - shonen - slice of life
surnatural - thriller - tournois - tragique - yonkoma
```

###### *Returns: [Anime search model](#anime-search-object) or [Manga search model](#manga-search-object) object*

### getInfoFromURL()

| Parameter | Type | Description |
| --- | --- | --- |
| url | string | a valid nautiljon anime or manga page url |

Usage exemple:
```js
nautiljonScraper.getInfoFromURL("https://www.nautiljon.com/animes/one+piece.html")
```

###### *Returns: [Anime model](https://github.com/Kylart/MalScraper/blob/master/README.md#anime-search-model) or [Manga model](https://github.com/Kylart/MalScraper/blob/master/README.md#manga-search-model) object*

## Data models

### Search

##### Search data models are **arrays** of **objects**. Its length is defined by the *totalLength* parameter on the *search()* method (default 15 and max 50).

#### Anime search object
```js
{
    name: 'One Piece',
    url: 'https://nautiljon.com/animes/one+piece.html',
    imageUrl: 'https://nautiljon.com/images/anime/00/60/one_piece_6.jpg?1606497438',
    description: `Il fut un temps où Gold Roger était le plus grand de tous les pirates, le "Roi des Pirates" était son surnom. A sa mort, son trésor d'une valeur inestimable connu sous le nom de "One Piece" fut caché quelque part sur "Grand Line". De nombreux pirates sont partis à la recherche de ce trésor mais t...`,
    format: 'Série TV',
    diffusion: 'En cours',
    episodesNumber: '?',
    startDate: '20/10/1999',
    endDate: null,
    score: '8.84/10'
}
```

#### Manga search object
```js
{
  name: 'One Piece',
  url: 'https://nautiljon.com/mangas/one+piece.html',
  imageUrl: 'https://nautiljon.com/images/manga/00/11/one_piece_11.jpg?1604043802',
  description: `Gloire, fortune et puissance, c'est ce que possédait Gold Roger, le tout puissant roi des pirates, avant de mourir sur l'échafaud. Mais ses dernières paroles ont éveillées bien des convoitises, et lança la fabuleuse "ère de la piraterie", chacun voulant trouver le fabuleux trésor qu'il disait avo...`,
  type: 'Shonen',
  volumesNumber: '97',
  startDate: '1997',
  score: '9.21/10'
}
```

### Anime

##### Anime data models are **objects**.

```js
{
    name: 'One Piece',
    japName: 'ワンピース',
    alternateName: null,
    url: 'https://nautiljon.com/animes/one+piece.html',
    imageUrl: 'https://nautiljon.com/images/anime/00/60/one_piece_6.jpg?11606497438',
    country: 'Japon',
    format: 'Série TV',
    source: 'Manga',
    startDate: '20/10/1999',
    endDate: '? (en cours)',
    genres: [
        'Action',         'Aventure',
        'Comédie',        'Drame',
        'Fantastique',    'Fantasy',
        'Shônen',         'Tournois',
        'Amitié',         'Combats',
        'Guerre',         'Pirates',
        'Super pouvoirs'
    ],
    studio: 'Toei Animation',
    vodPlatform: [ 'ADN', 'Crunchyroll', 'Amazon Prime Video' ],
    description: `Il fut un temps où Gold Roger était le plus grand de tous les pirates, le "Roi des Pirates" était son surnom. A sa mort, son trésor d'une valeur inestimable connu sous le nom de "One Piece" fut caché quelque part sur "Grand Line". De nombreux pirates sont partis à la recherche de ce trésor mais tous sont morts avant même de l'atteindre. Monkey D. Luffy rêve de retrouver ce trésor légendaire et de devenir le nouveau "Roi des Pirates". Après avoir mangé un fruit du démon, il possède un pouvoir lui permettant de réaliser son rêve. Il lui faut maintenant trouver un équipage pour partir à l'aventure !`,
    pictures: [
        'https://nautiljon.com/images/more/00/86/55868.jpg',
        //...
    ],
    trailer: 'https://www.youtube.com/embed/NjwWi1tLuY0?autoplay=1',
    episodes: {
        totalNumber: '?',
        duration: '24 min',
        listEpisodes: [
            {
                name: "I'm Luffy! The man who will become the Pirate King!",
                frenchName: 'Je suis Luffy! Celui qui deviendra Roi des pirates!',
                episode: '1',
                date: '20/10/1999'
            },
            //...
        ]
    },
    relations: {
        Animes: [
            {
                name: 'One Piece : Taose! Kaizoku Ganzack',
                url: 'https://nautiljon.com//animes/one+piece+-+taose!+kaizoku+ganzack.html',
                relationType: '[Pilote]',
                imageUrl: 'https://nautiljon.com//images/anime/00/19/one_piece_taose_kaizoku_ganzack_91.jpg?1588901653',
                additionnalInformations: '(OAV - 1998)'
            },
            //...
        ],
        Manga: [
            {
                name: 'One Piece',
                url: 'https://nautiljon.com//mangas/one+piece.html',
                relationType: "[Origine de l'adaptation]",
                imageUrl: 'https://nautiljon.com//images/manga/00/11/one_piece_11.jpg?1604043802',
                additionnalInformations: null
            },
            //...
        ]
    },
    news: {
        french: [
            {
                name: "One Piece l'anime reprend au Japon dès le 28 juin !!",
                url: 'https://nautiljon.com/breves/one+piece+-+l-anime+reprend+au+japon+dès+le+28+juin+!!,12794.html',
                date: '19/06/2020',
                description: "Le 20 avril dernier, nous vous annoncions que l'anime One Piece était mis en pause pour une durée indéterminée. L'épisode 929 était alors le dernier diffusé. Bonne nouvelle, la série reprend au Jap...",
                imageUrl: 'https://nautiljon.com/imagesmin/breves/00/49/one_piece_l_anime_reprend_au_japon_des_le_28_juin_12794.jpg?1592598799'
            },
            //...
        ]
    }
}
```

### Manga

##### Manga data models are **objects**.

```js
{
    name: 'One Piece',
    japName: 'ワンピース',
    alternateName: null,
    url: 'https://nautiljon.com/mangas/one+piece.html',
    imageUrl: 'https://nautiljon.com/images/manga/00/11/one_piece_11.jpg?11604043802',
    country: 'Japon',
    type: 'Shonen',
    startDate: '1997',
    status: 'En cours',
    volumesNumber: '97',
    genres: [ 'Action', 'Aventure', 'Comédie', 'Drame', 'Fantastique' ],
    author: { story: 'Oda Eiichiro', art: 'Oda Eiichiro' },
    editor: { VO: 'Shueisha', VF: 'Glénat' },
    description: `Gloire, fortune et puissance, c'est ce que possédait Gold Roger, le tout puissant roi des pirates, avant de mourir sur l'échafaud. Mais ses dernières paroles ont éveillées bien des convoitises, et lança la fabuleuse "ère de la piraterie", chacun voulant trouver le fabuleux trésor qu'il disait avoir laissé.\nBien des années plus tard, Shanks, un redoutable pirate aux cheveux rouges, rencontre Luffy, un jeune garçon d'une dizaine d'années dans un petit port de pêche. Il veut devenir pirate et le rejoindre, mais Shanks lui répond qu'il est trop jeune. Plus tard, Luffy avalera accidentellement le fruit Gomu Gomu qui rendra son corps élastique, mais aussi maudit par les eaux. Incapable de nager, Luffy ne veut pourtant pas renoncer à son rêve. Pour le consoler lorsqu'il part, Shanks lui offre son chapeau. Luffy jure alors de le rejoindre un jour avec son propre équipage\n A 17 ans, Luffy prend la mer dans une petite barque avec pour but de réunir un équipage de pirates, mais de pirates pas comme les autres, qui devront partager sa conception un peu étrange de la piraterie. L'aventure est lancée.`,
    relations: {
        Animes: [
            {
                name: 'One Piece',
                url: 'https://nautiljon.com//animes/one+piece.html',
                relationType: '[Adaptation]',
                imageUrl: 'https://nautiljon.com//images/anime/00/60/one_piece_6.jpg?1606497438',
                additionnalInformations: '(Série TV - 1999)'
            },
            //...
        ]
    },
    news: {
        french: [
            {
                name: 'Top Volumes Mangas (Oricon) semaine du 5 au 11 octobre 2020',
                url: 'https://nautiljon.com/actualite/mangas/top+volumes+mangas+(oricon)+-+semaine+du+5+au+11+octobre+2020-13339.html',
                date: '16/10/2020',
                description: 'Classement Oricon des 30 volumes les plus vendus cette semaine au Japon.',
                imageUrl: 'https://nautiljon.com/imagesmin/actualite/00/93/top_volumes_mangas_oricon_semaine_du_5_au_11_octobre_2020_13339.jpg?1602836624'
            },
            //...
        ]
    }
}
```

## License
MIT License

Copyright (c) barthofu