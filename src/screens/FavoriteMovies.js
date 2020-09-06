import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from "../components/Header";
import {connect} from "react-redux";
import {fetchMoviesList, updateFavoriteMovies} from "../store/actions/moviesAction";
import MovieSmallDisplay from "../components/MoveSmallDisplay";


const FavoriteMovies = ({navigation,updateFavoriteList, favoriteMovies}) => {

    const handleFavorite = (movie) => {
        updateFavoriteList(movie)
    };

    return (
        <View>
            <Header currentRoute={'Favorite'} navigation={navigation}/>
            {favoriteMovies.length > 0 &&
            <FlatList
                data={favoriteMovies}
                keyExtractor={(item) => item.title}
                renderItem={({item}) => {
                    return (
                        <MovieSmallDisplay isFavorite={true}
                                           handleFavorite={handleFavorite}
                                           movie={item}/>
                    );
                }}
            />}
        </View>
    );
};

const mapStateToProps = state => {
    const {favoriteMovies} = state.movie;
    return {
         favoriteMovies
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateFavoriteList: () => dispatch(updateFavoriteMovies())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovies);
