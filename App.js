import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MovieListScreen from './src/screens/MovieListScreen';
import FavoriteMovies from "./src/screens/FavoriteMovies";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={false}>
                <Stack.Screen name="MovieList" component={MovieListScreen}/>
                <Stack.Screen name="Favorite" component={FavoriteMovies}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
const styles = StyleSheet.create({
    text: {
        color: 'green',
        fontSize: 25,
    },
});

export default App;
