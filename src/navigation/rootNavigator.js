import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/home/HomeScreen';
import DashboardScreen from '../screen/home/DashboardScreen';
import LoginScreen from '../screen/home/LoginScreen';
import CreateAccScreen from '../screen/home/CreateAccScreen'
import LockScreen from '../screen/home/LockScreen'
import WelcomeScreen from '../screen/home/WelcomeScreen'
import ProfileScreen from '../screen/home/ProfileScreen'
import LottieScreen from '../screen/home/LottieScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>

<Stack.Screen name="Home" component={HomeScreen} />

<Stack.Screen name="Dashboard" component={DashboardScreen} />
<Stack.Screen name="Lock" component={LockScreen} />
<Stack.Screen name="Signup" component={CreateAccScreen} />
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Profile" component={ProfileScreen} />
<Stack.Screen name="Lottie" component={LottieScreen} />
<Stack.Screen name="Welcome" component={WelcomeScreen} />
      
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;