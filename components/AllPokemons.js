import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './Header';
import Main from './Main';

const AllPokemons = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView style = {styles.topFix}>
                <Header/>
                <Main style = {styles.appMain}/>
            </ScrollView>
        </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
container: {
    flex:1,
},
topFix:{
    height:'100%'
},
appMain:{
    height:'100%'
}
});

export default AllPokemons;
