/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNReduc = (
    <Provider store={ store }>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
