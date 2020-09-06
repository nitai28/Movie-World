import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const RNRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(RNRedux));
