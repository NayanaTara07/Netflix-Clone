//api key from TMDB
const api = "api_key=";

//base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

// requests for movies data
const requests = {

   fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
   fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
   fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
   fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
   fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
   fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
   fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,

};

//used to truncate the string

function truncate(str, r) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

//banner
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())

    .then((data) => {
        console.log(data.results);
        
        //every refresh the movie will be changed
        const setMovie =
            data.results[Math.floor(Math.random() * data.results.length - 1)];
        
        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner__title");
        var banner__desc = document.getElementById("banner__description");

        banner.style.backgroundImage =
            "url(" + banner_url + setMovie.backdrop_path + ")";
        banner__desc.innerText = truncate(setMovie.overview,150);
        banner_title.innerText = setMovie.name;    
    })

// movie rows
