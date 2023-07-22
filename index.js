/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MovieDetail2 from './MovieDetail2';
import navigate from './Navigation';
import testFlatlistAPI from './TestFlatListAPI';
AppRegistry.registerComponent(appName, () => navigate);
