/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/navigation/rootNavigator';
import {name as appName} from './app.json';
import configureStore from './src/Store/configStore'
import {Provider} from 'react-redux'
const store = configureStore();

const ReduxApp = ()=>
    <Provider store={store}>
        <App/>
    </Provider>


AppRegistry.registerComponent(appName, () =>ReduxApp);
