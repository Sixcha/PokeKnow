import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon'
import PokemonStats from '../data/PokeLearnStats.json'
import colours from '../data/TypeColours.json'

const Pokemons = ({ pressFunction }) => {

  return (
    <View style={styles.background}>
      {PokemonStats.map((pkmn , i) => {
        if (pkmn['No.'] != '#000')
        return (
          <Pokemon key={i} id={pkmn['No.']} name={pkmn['Name']} type1={pkmn['Type 1']} type2={pkmn['Type 2']} color={colours[pkmn['Type 1'].toLowerCase()]} pressFunction={pressFunction}/>
        )
      })}
    </View>
  )
  
}

export default Pokemons

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