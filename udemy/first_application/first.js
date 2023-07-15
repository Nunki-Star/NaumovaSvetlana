const numberOfFilms = parseInt(prompt("how many movies have you watched?"));
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:true
};
debugger
const lastMovie1 = prompt("what is the last movie youve watched", ""),
      movieValue1 = prompt("please evaluate this movie with the score from 1 to 10", ""),
      lastMovie2 = prompt("what is the last movie youve watched", ""),
      movieValue2 = prompt("please evaluate this movie with the score from 1 to 10", "");

personalMovieDB.movies[lastMovie1]=movieValue1;
personalMovieDB.movies[lastMovie2]=movieValue2;

const actorFav1 = prompt("what is your favourite actor", "");
const countryOrigin1 = prompt ("what is his/her contry of origin","");
const actorFav2 = prompt("what is your favourite actor","");
const countryOrigin2 = prompt("what is his/her country of origin", "");

personalMovieDB.actors[actorFav1]=countryOrigin1;
personalMovieDB.actors[actorFav2]=countryOrigin2

const favGenre1 = prompt("enter your fav genre", "");
const favGenre = prompt("enter one more genre you like") ;
personalMovieDB.genres[0]=favGenre1;
personalMovieDB.genres[1]=favGenre

console.log(personalMovieDB)