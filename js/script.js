const API_KEY = '6ae6cd0fc1b2ed3670ea82c17b067a14';
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const API_URL = BASE_URL + API_KEY;
let main = document.querySelector('#main');


getData(API_URL);

function getData(url) {
    fetch(url).then(response => response.json()).then(data => {
        showMovies(data.results);
    })
}

function showMovies(data) {
    main.innerHTML = '';
    data.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = 
            `<img src="${IMG_URL+movie.poster_path}" alt="${movie.title}" />
            <div class="info">
                <h3>${movie.title}</h3>
                <span>${movie.vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${movie.overview}
            </div>`;
        main.appendChild(movieEl);
    })
}