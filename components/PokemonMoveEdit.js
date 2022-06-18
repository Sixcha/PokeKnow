import { StyleSheet, Text, View, SafeAreaView, ScrollView, } from 'react-native'
import React from 'react'
import colours from '../data/TypeColours.json';
import useStore from '../data/store';
import PokemonMoves from '../data/PokeLearnMovesFull.json'
import PokemonMove from './PokemonMove';

const PokemonMoveEdit = ({ route, navigation }) => {
  const caughtPokemon = useStore(state => state.caughtPokemon)

  const pokemonId = route.params.params.id;
  const currentPokemon = caughtPokemon[pokemonId]

  const recommendedMoves = currentPokemon.Insight+2

  const renderIfTooManyMoves = () => {
    if (currentPokemon.Moves.length>recommendedMoves) {
      return <Text>Too Many Moves!</Text>
    }
  }

  const getOtherMoves = () => {

  }

  return (
    <SafeAreaView style={[styles.background]}>
      <ScrollView>
        {renderIfTooManyMoves()}
        {currentPokemon.Moves.map((move , i) => {
          return (
            <PokemonMove key={i} name={move} color={colours[pkmn['Type 1'].toLowerCase()]}/>
          )
        })}
      </ScrollView>
    </SafeAreaView>
        
  )
}

export default PokemonMoveEdit

const styles = StyleSheet.create({
  background:{
    backgroundColor:'#36393E',
    flex: 1,
  },

})