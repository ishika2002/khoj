import ExploreScreen from './screens/ExploreScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NewPostScreen from './screens/NewPostScreen';
import MoreInfo from './screens/MoreInfo';
import CommentSection from './screens/CommentSection';
import { StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartPage from "./components/StartPage"
import LoginPage from './components/Authentication/LoginPage';
import SignupPage from './components/Authentication/SignupPage';
import ProfilePage from './components/Profile/ProfilePage';
import EditPage from './components/Profile/EditPage';

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
        <Stack.Screen 
          name="Profile"
          component={ProfilePage}
        />
        <Stack.Screen 
          name="Edit"
          component={EditPage}
        />
        <Stack.Screen
          name="Explore"
          component={ExploreScreen}
        />
        <Stack.Screen
          name="Add Post"
          component={NewPostScreen}
        />
        <Stack.Screen
          name="More Info"
          component={MoreInfo}
        />
        <Stack.Screen
          name="Commment Section"
          component={CommentSection}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
