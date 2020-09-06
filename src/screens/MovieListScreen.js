import React, {useEffect, useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from "../components/Header";
import {connect} from "react-redux";
import {fetchMoviesList, updateFavoriteMovies} from "../store/actions/moviesAction";
import MovieSmallDisplay from "../components/MoveSmallDisplay";


const MovieListScreen = ({navigation, fetchMovies, movies, updateFavoriteList, favoriteMovies}) => {

    useEffect(() => {
        fetchMovies()
    }, []);


    const handleFavorite = (movie) => {
        updateFavoriteList(movie)
    };

    const checkFavorite = (movie) => {
        return favoriteMovies.findIndex(item => item.id === movie.id) !== -1
    };

    useEffect(() => {
    }, [favoriteMovies]);


    return (
        <View>
            <Header currentRoute={'MovieList'} handleNav={(value) => navigation.navigate(value)}/>
            {movies.length > 0 &&
            <FlatList
                data={movies}
                keyExtractor={(item) => item.title}
                renderItem={({item}) => {
                    let isFavorite = checkFavorite(item);
                    return (
                        <MovieSmallDisplay isFavorite={isFavorite}
                                           handleFavorite={handleFavorite}
                                           movie={item}/>
                    );
                }}
            />}
        </View>
    );
};

const mapStateToProps = state => {
    const {movies, favoriteMovies} = state.movie;
    return {
        movies, favoriteMovies
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: () => dispatch(fetchMoviesList()),
        updateFavoriteList: (movie) => dispatch(updateFavoriteMovies(movie))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListScreen);
