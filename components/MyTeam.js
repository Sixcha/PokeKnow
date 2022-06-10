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

const MyTeam = () => {
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
    flex:1
},
appMain:{
    flex:1
}
});

export default MyTeam;
