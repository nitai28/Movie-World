import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image} from "react-native";
import {config} from '../config'


const MovieSmallDisplay = ({movie, handleFavorite = () => null, isFavorite = false}) => {

    return (
        <View style={styles.movieContainer}>
            <View>
                <Image resizeMode={'center'} style={styles.movieImage}
                       source={{uri: `${config.ImageBaseURL}${movie.poster_path}`}}/>
            </View>
            <View>
                <View>
                    <Text numberOfLines={1} style={styles.title}>{movie.title}</Text>
                </View>
                <Text>{movie.year}</Text>
                <Text style={{width: 200}} lineBreakMode={'tail'} numberOfLines={2}>{movie.overview}</Text>
            </View>
            <TouchableOpacity onPress={()=>handleFavorite(movie)}>
                <Image resizeMode={'center'} style={styles.movieImage}
                       source={isFavorite ? require('../assets/minus.png') : require('../assets/add.png')}/>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    movieImage: {
        width: 100,
        height: 100
    },
    movieContainer: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    title: {
        fontSize: 22,
        width: 200
    }
});


export default MovieSmallDisplay
