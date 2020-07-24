/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/navigation/rootNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>App);
