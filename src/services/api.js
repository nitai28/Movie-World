import axios from 'axios';

export const fetchMoviesFromApi = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=63fac5f00ea4f7e4cd8116557e149e53');
    let movies = res.data.results;
    let moviesAfterFilterData = [];
    movies.forEach(movie => {
        let {title, overview, poster_path, id, release_date: year} = movie;
        year = year.slice(0, year.indexOf('-'));
        moviesAfterFilterData.push({title, overview, poster_path, id, year});
    });
    return moviesAfterFilterData
};
