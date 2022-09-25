const KEY = '77e7936073a1f82fbc0d3a17a985fb5b';

// Запит на отримання популярних фільмів
function fetchMoviesTrend() {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
  fetch(url).then(r => {
    console.log(r);
  });
}

// Отримання фільмів по запиту
function fetchMovies() {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=terminator Genisys`;
  fetch(url).then(r => {
    console.log(r);
  });
}

// Отримання фільму по ID
function fetchMovieData() {
  const url = `https://api.themoviedb.org/3/movie/429473?api_key=${KEY}&language=en-US`;
  fetch(url).then(r => {
    console.log(r);
  });
}

fetchMoviesTrend();
fetchMovies();
fetchMovieData();
