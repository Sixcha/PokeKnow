import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon'
import PokemonStats from '../data/PokeLearnStats.json'
import colours from '../data/TypeColours.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
import useStore from '../data/store';

const MyPokemon = ({ pressFunction }) => {

  const caughtPokemon = useStore(state => state.caughtPokemon);

  const addToStorage = async (value) => {
    const oldValue = await AsyncStorage.getItem('caught');
    if (JSON.parse(oldValue) != value && value != []){
      try {
        const newJson = JSON.stringify(value)
        await AsyncStorage.setItem('caught', newJson)
      }
      catch (e){
        console.log(e)
      }
    } 
  }

  addToStorage(caughtPokemon)

  const resetAllPokemon = async () => {
    try {
      await AsyncStorage.setItem('caught', JSON.stringify([]))
    }
    catch (e){
      console.log(e)
    }
  }

    return (
      <View style={styles.background}>
        {caughtPokemon.map((pkmn , i) => 
            <Pokemon key={i} id={pkmn['No.']} name={pkmn['Name']} type1={pkmn['Type 1']} type2={pkmn['Type 2']} color={colours[pkmn['Type 1'].toLowerCase()]} pressFunction={pressFunction} otherId={i}/* longPressFunction={resetAllPokemon} *//>
        )}
      </View>
    )
  
}

export default MyPokemon

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#36393E',
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:10,
        justifyContent:'space-around'
    }
})