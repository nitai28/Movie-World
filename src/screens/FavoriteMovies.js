import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from "../components/Header";
import {connect} from "react-redux";
import {updateFavoriteMovies} from "../store/actions/moviesAction";
import MovieSmallDisplay from "../components/MoveSmallDisplay";


const FavoriteMovies = ({navigation, updateFavoriteList, favoriteMovies}) => {

    const handleFavorite = (movie) => {
        updateFavoriteList(movie)
    };


    return (
        <View>
            <Header
                currentRoute={'Favorite'}
                handleNav={(value) => navigation.navigate(value)}/>
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
        updateFavoriteList: (movie) => dispatch(updateFavoriteMovies(movie))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovies);
