const API_KEY = "c9c62ab0a81a130b26e8b1611dfdc727";
const URL_INCIAL = "https://api.themoviedb.org/3";



// endpoints

const requests = {
    fetchNetflixOriginals: `${URL_INCIAL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchDrama: `${URL_INCIAL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchKids: `${URL_INCIAL}/discover/movie?api_key=${API_KEY}&with_genres=35&with_cast=23659&sort_by=revenue.desc`,
    fetchComedyMovies: `${URL_INCIAL}/discover/movie?api_key=${API_KEY}&certification_country=US&certification=R&sort_by=vote_average.desc`,
};



export default requests;