/**
 * Do you ever get tired of going to YouTube for a song, typing the name in, finding the right video, then selecting it? Ugh.

Let's make a simple SongsManager. Here is the desired result:

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
Copy to clipboardErrorCopied
Effectively, you will be creating a hyper-specific, YouTube Song Manager object.

Did you notice that each URL starts the same way?

Inside of SongsManager there should be a songs object, but, instead of saving songs like this:

const songs = {
  "sax": "https://www.youtube.com/watch?v=3JZ4pnNtyxQ",
  "how long": "https://www.youtube.com/watch?v=CwfoyVa980U"
}
Copy to clipboardErrorCopied
The addSong function in SongsManager will make sure that we only save the identifiers, like this:

const songs = {
  "sax": "3JZ4pnNtyxQ",
  "how long": "CwfoyVa980U"
}
Copy to clipboardErrorCopied
Imagine how much space we'd be saving if we actually had to store this in a database!

Of course, when we call getSong - it should give us the full URL!

Go ahead, create SongsManager - it should not be a very long function ~
 */

// import SongsManager from './songsManager.js';

function SongsManager() {
    const songs = {
        "Bohemian Rhapsody": "fJ9rUzIMcZQ",
        "Shape of You": "JGwWNGJdvx8",
        "Despacito": "kJQP7kiw5Fk",
        "Uptown Funk": "OPf0YbXqDm0",
        "See You Again": "RgKAFK5djSk",
        "Gangnam Style": "9bZkp7q19f0",
        "Thinking Out Loud": "lp-EO5I60KA",
        "Sorry": "fRh_vgS2dFE",
        "Sugar": "09R8_2nJtjg",
        "Hello": "YQHsXMglC9A"
    }

    function addSong(name, address) {
        songs[name] = address.split("=")[1];
    }

    function getSong(name) {
        const urlFirstPart = 'https://www.youtube.com/watch?v='
        console.log(urlFirstPart + songs[name]);
    }

    return {
        addSong,
        getSong
    }

}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("Hello") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
