import * as api from '../../services/api'

export const fetchMoviesList = () => {
    return async (dispatch) => {
        let movies = await api.fetchMoviesFromApi();
        dispatch({type: 'SET_MOVIES', payload: movies});
    }
};

export const updateFavoriteMovies = (movie) => {
    console.log(movie)
    return (dispatch, getState) => {
        let favoriteMovies = [...getState().movie.favoriteMovies];
        console.log(favoriteMovies)
        let updatedFavoriteMovies = [];
        // let index = favoriteMovies.findIndex(movieObj => movie.title === movieObj.title);
        // if (index === -1) {
        //     updatedFavoriteMovies = [...favoriteMovies, movie];
        // } else {
        //     updatedFavoriteMovies = favoriteMovies.filter(movieObj => movie.title !== movieObj.title);
        // }
        // dispatch({type: 'UPDATE_FAVORITE_LIST', payload: updatedFavoriteMovies});
    };
};
