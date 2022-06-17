import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTeamStackScreen from './components/TabScreen';
import CaughtPokemon from './components/CaughtPokemon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useStore from './data/store';
import PokemonStatEdit from './components/PokemonStatEdit';
import PokemonMoveEdit from './components/PokemonMoveEdit';


const App = () => {
  const pokemonArray = useStore(state => state.caughtPokemon)
  const changeInitialValue = useStore(state => state.setInitialPokemon)

    //Initial check for caught pokemon
const checkStorage = async () => {
  const value = await AsyncStorage.getItem('caught');
  try {
    if (value !== null){
      const valueJson = JSON.parse(value)
      changeInitialValue(valueJson);
    }       

  } catch (e) {
    console.log(e)
  }

}

  useEffect(() => {
    checkStorage();
  }, [])  

const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MyTeamStackScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ChosenPokemon" component={CaughtPokemon} options={{ headerShown: false }}/>
        <Stack.Screen name="StatEdit" component={PokemonStatEdit} options={{ headerShown: false }}/>
        <Stack.Screen name="MoveEdit" component={PokemonMoveEdit} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App