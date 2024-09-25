class MediaItem {
    constructor(title, director, releaseYear) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
    }

    getDetails() {
        return `${this.title} (${this.releaseYear}) - Directed by ${this.director}`;
    }
}

class Movie extends MediaItem {
    constructor(title, director, releaseYear, duration) {
        super(title, director, releaseYear); // Call the base class constructor
        this.duration = duration;
    }

    getDetails() {
        return `${super.getDetails()} - ${this.duration} minutes`;
    }
}

class TVShow extends MediaItem {
    constructor(title, director, releaseYear, numEpisodes) {
        super(title, director, releaseYear);
        this.numEpisodes = numEpisodes;
    }

    getDetails() {
        return `${super.getDetails()} - ${this.numEpisodes} episodes`;
    }
}

const movie1 = new Movie("Inception", "Christopher Nolan", 2010, 148);
const tvShow1 = new TVShow("Stranger Things", "The Duffer Brothers", 2016, 25);

console.log(movie1.getDetails());
// Output: "Inception (2010) - Directed by Christopher Nolan - 148 minutes"

console.log(tvShow1.getDetails());
// Output: "Stranger Things (2016) - Directed by The Duffer Brothers - 25 episodes"

