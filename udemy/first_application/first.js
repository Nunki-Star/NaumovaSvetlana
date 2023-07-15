const numberOfFilms = parseInt(prompt("how many movies have you watched?", ""));
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};

const a = prompt("last movie you've watched", ""),
      b = prompt("how can you evaluate it?", ""),
      c = prompt("last movie you've watched", ""),
      d = prompt("how can you evaluate it?", "")