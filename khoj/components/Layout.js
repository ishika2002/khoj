import {View, StyleSheet, Platform, StatusBar, NativeModules, Dimensions} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

export default function Layout({children}) {
    const [loaded] = useFonts({
        'NunitoBlack': require('../assets/fonts/Nunito-Black.ttf'),
        'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf')
      });

      if (!loaded) {
        //console.log(require('../../assets/fonts/Nunito-Black.ttf'))
        return null;
      }

      console.log(Dimensions.get('screen').height-Dimensions.get('window').height-StatusBar.currentHeight)

    return (
        <View style={styles.container}>
          <SafeAreaView style={{alignItems: 'center', width: '90%', justifyContent: 'center'}}>

          {children}
          </SafeAreaView>
        </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Nunito-Medium'
    },
  });