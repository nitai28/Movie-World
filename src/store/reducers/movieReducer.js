const initState = {
    movies: [],
    favoriteMovies: []
};


const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_FAVORITE_LIST':
            return {
                ...state,
                favoriteMovies: action.payload,
            };

        case 'SET_MOVIES':
            console.log(333);
            return {
                ...state,
                movies: action.payload,
            };

        default:
            return state;
    }
};

export default movieReducer;


