
import React,{ useState,useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bookscreens from './screens/Bookscreens';
import * as Font from 'expo-font';





const App = () => {
  const [loading, setLoading]= useState(true)
  const loadFont = async () => {
    try{
      await Font.loadAsync({
        'Starjedi': require("./assets/Fonts/Starjedi.ttf"),
        'waltographUI':require ("./assets/Fonts/waltographUI.ttf"),
        "Montserrat-Medium":require("./assets/Fonts/Montserrat-Medium.ttf"),
        "Montserrat-Black":require ("./assets/Fonts/Montserrat-Black.ttf"),
        "Gilroy-Bold": require("./assets/Fonts/Gilroy-Bold.ttf"),
      })
      setLoading(false)
  
    } catch (e) {
      console.error('erreur',e)
    }
  }
  useEffect(() => {
    loadFont();
  },[] )
  if (loading) {
    return(
      <View style={styles.container}>
        <Text> Loading....</Text>
      </View>

    )
  }
  return (
    
    <Bookscreens/>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    alo: {
      fontFamily:'Starjedi',
      fontSize: 40,

    }
});
export default App;
