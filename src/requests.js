const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "f7b7a6107db2b348278fdce32be13367"


const requests = {
    trendingMovies : `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`,
    trendingTVShows: `${BASE_URL}/trending/tv/day?api_key=${API_KEY}&language=en-US&page=1`,
    trendingTVShowsAiringToday : `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    trendingTVShowsOnAir : `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
    trendingTVShowsPopular : `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    trendingTVShowsTopRated : `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,

}


export default requests

console.log(requests)