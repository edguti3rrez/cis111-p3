/* 
    Name: Edwin Gutierrez
    Class: CIS 111
    Description: Project 3: Arrays, Objects, and Chrome Console
*/

// Array of songs and their charts:
const songList = [
    {title: "Tu Carcel", artist: "Los Bukis", position: 23, weeksOnChart: 1}, 
    {title: "No Role Modelz", artist: "J. Cole", position: 36, weeksOnChart: 25}, 
    {title: "Stronger", artist: "Kanye West", position: 3, weeksOnChart: 22}, 
    {title: "Circles", artist: "Post Malone", position: 1, weeksOnChart: 57}, 
    {title: "Tear In My Heart", artist: "Twenty One Pilots", position: 82, weeksOnChart: 8} ];

let catalogObject = {
    _songs: [], // empty array will be filled with song array from above

    // adds songs from the songList array to the _songs array
    addSong (props) {
        // adjusts the maximum length values based on the length of titles of added songs:
        this._songs.push (props);
        this._songs[i].title = this._songs[i].title.trim();
        this._songs[i].artist = this._songs[i].artist.trim();

        if (this._songs[i].title.length > this._maxTitleLength) {
            this._maxTitleLength = this._songs[i].title.length;
        }
        if (this._songs[i].artist.length > this._maxArtistLength) {
            this._maxArtistLength = this._songs[i].artist.length;
        }
        if (String(this._songs[i].position).length > this._maxPositionLength) {
            this._maxPositionLength = String(this._songs[i].position).length;
        }
        if (String(this._songs[i].weeksOnChart).length > this._maxWeeksOnChartLength) {
            this._maxWeeksOnChartLength = String(this._songs[i].weeksOnChart).length;
        }
    },

    // displays the new songs and changes their padding based on the title lengths
    listSongs (sorted = false) {
        const position = this.padString("Position", this._maxPositionLength, ' ', false);
        const title = this.padString("Title", this._maxTitleLength, ' ', false);
        const artist = this.padString("Artist", this._maxArtistLength, ' ', false);
        const weeksOnChart = this.padString("Weeks On Chart", this._maxWeeksOnChartLength,' ', false);
        
        console.log (`${position} ${title} ${artist} ${weeksOnChart}`);

        for (let i2 = 0; i2 < this._songs.length; i2++){
            if (sorted === false) {
                console.log (`${this.padString(this._songs[i2].position, this._maxPositionLength, ' ', false)} ${this.padString(this._songs[i2].title, this._maxTitleLength, ' ', false)} ${this.padString(this._songs[i2].artist, this._maxArtistLength, ' ', false)} ${this.padString(this._songs[i2].weeksOnChart, this._maxWeeksOnChartLength, ' ', true)}`);
            } else if (sorted === true) {
                this._songs.sort ((a, b) => (a.position - b.position));
            
                console.log (`${this.padString(this._songs[i2].position, this._maxPositionLength, ' ', false)} ${this.padString(this._songs[i2].title, this._maxTitleLength, ' ', false)} ${this.padString(this._songs[i2].artist, this._maxArtistLength, ' ', false)} ${this.padString(this._songs[i2].weeksOnChart, this._maxWeeksOnChartLength, ' ', true)}`);
            }
        }
    },

    // adds padding to the strings involved in the table!!
    padString (data, maxLength, padCharacter, padLeft) {
        const str = new String(data);
        let sum = 0;
        let paddingAmount = new String();
    
        while (sum < maxLength - str.length) {
            paddingAmount += padCharacter;
            sum ++;
        }

        if (padLeft === true) {
            return paddingAmount + str;

        } else if (padLeft !== true) {
            return str + paddingAmount;
        }
    },

    //title headers and lengths for the table
    _maxTitleLength: "Title".length,
    _maxArtistLength: "Artist".length,
    _maxPositionLength: "Position".length,
    _maxWeeksOnChartLength: "Weeks On Chart".length,

    getSongByIndex (index) { // returns a song based on the position called
        if (typeof(this._songs[index]) === "object") {
            console.log (this._songs[index]);
        } else {
            console.log({});
        }     
    },

    getSongByTitle (title) { // will get the song object based on inputed index value
        let functionCycle = 0;

        for (let i2 = 0; i2 < this._songs.length; i2++) {
            if (title.trim() === this._songs[i2].title) {
                console.log(this._songs[i2]);
            } else if (functionCycle === 5) {
                console.log({});
            }
        functionCycle ++;
        }
    },
};

const catalog = Object.create(catalogObject); // creates object instance to be used

let i = 0;

// calls the functions to add the songs:
for (; i < songList.length; i++) {
    catalog.addSong (songList[i]);
}

// lists out the table of songs:
catalog.listSongs ();

// Practice inputs:
catalog.getSongByIndex(2);
catalog.getSongByTitle(" No Role Modelz ");
catalog.listSongs(true);