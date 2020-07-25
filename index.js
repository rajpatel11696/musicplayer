/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/navigation/rootNavigator';
import Home from './src/screen/home/HomeScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>App);
