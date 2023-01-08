import { StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartPage from "./components/StartPage"
import LoginPage from './components/Authentication/LoginPage';
import SignupPage from './components/Authentication/SignupPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}