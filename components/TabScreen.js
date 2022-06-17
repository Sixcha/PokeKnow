import { StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react'
import MyTeam from './MyTeam';
import AllPokemons from './AllPokemons';

const MyTeamStackScreen = () => {

const Tab = createBottomTabNavigator();

  return (
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
          component={MyTeam}
          options={{ headerTintColor: '#fff',
          tabBarIcon: ({size, color}) => (<MaterialIcons name={"computer"} color={color} size={size} />),
          headerStyle:{
            backgroundColor: '#27292c',
          } }}
        />
      </Tab.Navigator>
    
  )
}

export default MyTeamStackScreen

const styles = StyleSheet.create({})