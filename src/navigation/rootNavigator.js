import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../Screen/Js files/DashboardScreen';
import LoginScreen from '../Screen/Js files/LoginScreen';
import CreateAccScreen from '../Screen/Js files/CreateAccScreen';
import LockScreen from '../Screen/Js files/LockScreen';
import WelcomeScreen from '../Screen/Js files/WelcomeScreen';
import ProfileScreen from '../Screen/Js files/ProfileScreen';
import HomeScreen from '../Screen/Js files/HomeScreen';
import SettingScreen from '../Screen/Js files/SettingScreen';
import MusiqueAlarm from '../Screen/Js files/MusiqueAlarm';
import ThemeScreen from '../Screen/Js files/ThemeScreen';
import FaQScreen from '../Screen/Js files/FaQScreen';
import PlayerScreen from '../Screen/Js files/PlayerScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
<Stack.Screen name="Welcome" component={WelcomeScreen} />
<Stack.Screen name="Dashboard" component={DashboardScreen} />
<Stack.Screen name="FaQ" component={FaQScreen} />
<Stack.Screen name="Home" component={HomeScreen}/> 
<Stack.Screen name="Lock" component={LockScreen} />
<Stack.Screen name="Clock" component={MusiqueAlarm} />
<Stack.Screen name="Signup" component={CreateAccScreen} />
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Profile" component={ProfileScreen} />
<Stack.Screen name="Setting" component={SettingScreen} />
<Stack.Screen name="Theme" component={ThemeScreen} />
<Stack.Screen name="Player" component={PlayerScreen} />
      
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;