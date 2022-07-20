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
  const currentPokemonName = currentPokemon.Name

  const recommendedMoves = currentPokemon.Insight+2

  const renderIfTooManyMoves = () => {
    if (currentPokemon.Moves.length>recommendedMoves) {
      return <Text>Too Many Moves!</Text>
    }
  }

  const getOtherMoves = () => {
    const regex = new RegExp(`[0-9]{3} ${currentPokemonName}`)
    const starterMoves = [];
    const beginnerMoves = [];
    const amateurMoves = [];
    const aceMoves = [];
    const proMoves = [];
    const masterMoves = [];

    
    const number = PokemonMoves.findIndex((element) => regex.test(element['Number & Name']) === true)
      for (let j=1; j < 28 ; j++) {
        switch (PokemonMoves[number][`Rank ${j}`]) {
          case "Starter":
            starterMoves.push(PokemonMoves[number][`Move ${j}`])
          break;

          case "Beginner":
            beginnerMoves.push(PokemonMoves[number][`Move ${j}`])
          break;

          case "Amateur":
            amateurMoves.push(PokemonMoves[number][`Move ${j}`])
          break;

          case "Ace":
            aceMoves.push(PokemonMoves[number][`Move ${j}`])
          break;

          case "Pro":
            proMoves.push(PokemonMoves[number][`Move ${j}`])
          break;

          case "Master":
            masterMoves.push(PokemonMoves[number][`Move ${j}`])
          break;
        
          default:
          break;
        }
      }

      return(
        <View>
          <Text>Starter:</Text>
            {starterMoves.map((move , i) => 
              <PokemonMove key={i} name={move}/>
            )}
          <Text>Beginner:</Text>
            {beginnerMoves.map((move , i) => 
              <PokemonMove key={i} name={move}/>
            )}
          <Text>Amateur:</Text>
            {amateurMoves.map((move , i) => 
              <PokemonMove key={i} name={move}/>
            )}
          <Text>Ace:</Text>
            {aceMoves.map((move , i) => 
              <PokemonMove key={i} name={move}/>
            )}
          <Text>Pro:</Text>
            {proMoves.map((move , i) => 
              <PokemonMove key={i} name={move}/>
            )}
          <Text>Master:</Text>
            {masterMoves.map((move , i) => 
              <PokemonMove key={i} name={move}/>
            )}
        </View>
      )
  }

  return (
    <SafeAreaView style={[styles.background]}>
      <ScrollView>
        {renderIfTooManyMoves()}
        <Text>Known Moves:</Text>
        {currentPokemon.Moves.map((move , i) => {
          return (
            <PokemonMove key={i} name={move}/>
          )
        })}
        <Text>Move Pool:</Text>
        {getOtherMoves()}
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