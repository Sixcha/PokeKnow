import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import MyTeam from './MyTeam';
import CaughtPokemon from './CaughtPokemon';

const MyTeamStackScreen = () => {

const MyTeamStack = createNativeStackNavigator();
const route = useRoute();
const [currentRoute, setCurrentRoute] = useState(route.name)
console.log(currentRoute);

  return (
    <MyTeamStack.Navigator>
      <MyTeamStack.Screen name="MainScreen" component={MyTeam}/>
      <MyTeamStack.Screen name="ChosenPokemon" component={CaughtPokemon}/>
    </MyTeamStack.Navigator>
  )
}

export default MyTeamStackScreen

const styles = StyleSheet.create({})