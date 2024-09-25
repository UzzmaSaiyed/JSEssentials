//Movie System

class Movie {
    constructor(title, year, genre) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.available = true;
    }

    rent() {
        if (this.available) {
            this.available = false;
            console.log(`You have rented ${this.title}. Enjoy!`);
        } else {
            console.log(`${this.title} is currently unavailable.`);
        }
    }

    returnMovie() {
        this.available = true;
        console.log(`You have returned ${this.title}. Thank you!`);
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.subscribed = false;
        this.rentedMovies = [];
    }

    subscribe() {
        this.subscribed = true;
        console.log(`${this.name} has subscribed to the streaming service.`);
    }

    rentMovie(movie) {
        if (this.subscribed) {
            movie.rent();
            this.rentedMovies.push(movie);
        } else {
            console.log(`${this.name} must subscribe first to rent movies.`);
        }
    }

    returnMovies() {
        this.rentedMovies.forEach((movie) => {
            movie.returnMovie();
        });
        this.rentedMovies = [];
    }
}

class MovieRentalSystem {
    constructor() {
        this.movies = [];
        this.users = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    addUser(user) {
        this.users.push(user);
    }
}

// Create movies
const movie1 = new Movie("Inception", 2010, "Sci-Fi");
const movie2 = new Movie("The Dark Knight", 2008, "Action");
const movie3 = new Movie("Interstellar", 2014, "Sci-Fi");

// Create users
const user1 = new User("Alice");
const user2 = new User("Bob");

// Create the movie rental system
const netflix = new MovieRentalSystem();

// Add movies and users to the system
netflix.addMovie(movie1);
netflix.addMovie(movie2);
netflix.addMovie(movie3);
netflix.addUser(user1);
netflix.addUser(user2);

// Users subscribe and rent movies
user1.subscribe();
user1.rentMovie(movie1);
user1.rentMovie(movie2);

user2.subscribe();
user2.rentMovie(movie1);

// User returns movies
user1.returnMovies();
user2.returnMovies();
