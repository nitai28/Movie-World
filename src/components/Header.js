import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, requireNativeComponent} from "react-native";


const Header = ({handleNav=()=>null, currentRoute = 'MovieList'}) => {


    return (
        <View>
            <Text style={styles.mainHeadline}>Movie World</Text>
            <View style={styles.headerButtons}>
                <TouchableOpacity
                    style={currentRoute === 'MovieList' ? {...styles.button, ...styles.selectedButton} : styles.button}
                    onPress={()=>handleNav('MovieList')}><Text>Movies</Text></TouchableOpacity>
                <TouchableOpacity
                    style={currentRoute === 'Favorite' ? {...styles.button, ...styles.selectedButton} : styles.button}
                    onPress={()=>handleNav('Favorite')}><Text>Favorites</Text></TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainHeadline: {
        paddingVertical: 15,
        fontSize: 40,
        textAlign: 'center'
    },
    headerButtons: {
        width: 150,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderWidth: 2,
    },

    selectedButton: {
        backgroundColor: 'blue'
    }
});


export default Header
