export const API_KEY = "f3eef3525b752a9a33dfd1b906ce09a8";

export const breakpoints = [
    { width: 768, itemsToShow: 6 }
]


export const moviesAndShows = [
    {
        heading: "Popular Movies",
        tag: "movies",
        API_URL: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    },
    {
        heading: "Popular TV Shows",
        tag: "shows",
        API_URL: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    },
    {
        heading: "Top Rated TV Shows",
        tag: "shows",
        API_URL: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    },
    {
        heading: "Top Rated Movies",
        tag: "movies",
        API_URL: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    },
    {
        heading: "Upcoming Movies",
        tag: "movies",
        API_URL: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    },
]


export const movies = [
    {
        heading: "Popular Movies",
        tag: "movies",
        API_URL: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    },
    {
        heading: "Top Rated Movies",
        tag: "movies",
        API_URL: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    },
    {
        heading: "Upcoming Movies",
        tag: "movies",
        API_URL: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    },
]


export const shows = [
    {
        heading: "Popular TV Shows",
        tag: "shows",
        API_URL: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    },
    {
        heading: "Top Rated TV Shows",
        tag: "shows",
        API_URL: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    }
]