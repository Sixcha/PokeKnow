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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AllPokemons from './components/AllPokemons';
import MyTeam from './components/MyTeam';
import MyTeamStackScreen from './components/MyTeamStackScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useStore from './data/store';


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
      //setCaughtPokemon(JSON.parse(value));
      //useStore(state => state.checkStorage);
      //setIsStorageChecked(true);
    }       

  } catch (e) {
    console.log(e)
  }

}

  useEffect(() => {
    checkStorage();
  }, [])  

const Tab = createBottomTabNavigator();


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: '#3466AF' ,
          tabBarInactiveTintColor: 'black',
          tabBarInactiveBackgroundColor: 'lightblue' ,
          headerShown:false,
          lazy: true
        }}>
        <Tab.Screen
          name ="All Pokemon"
          component={AllPokemons}
          options={{ headerTintColor: '#fff',
          tabBarIcon: ({size, color}) => (<MaterialCommunityIcons name={"pokeball"} color={color} size={size} />),
          headerStyle:{
            backgroundColor: '#27292c',
          } }}
        />
        <Tab.Screen
          name='My Team'
          component={MyTeamStackScreen}
          options={{ headerTintColor: '#fff',
          tabBarIcon: ({size, color}) => (<MaterialIcons name={"computer"} color={color} size={size} />),
          headerStyle:{
            backgroundColor: '#27292c',
          } }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
  )
}

export default App