import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PokemonMoves from '../data/PokeMoveSorted.json'
import colours from '../data/TypeColours.json';
import useStore from '../data/store';
import NewButton from './NewButton';

const PokemonMove = ({ name }) => {
    const caughtPokemon = useStore(state => state.caughtPokemon)
    const pokemonId = useStore(state => state.selectedPokemonID)
    //const setNewPokemon = useStore(state => state.setSpecificPokemon)

    const currentPokemon = caughtPokemon[pokemonId]

    const currentMove = PokemonMoves.find(move => 
        move.Movename === name
    )
    const moveColor = colours[currentMove['Type']]

    const addMove = () => {
        currentPokemon.Moves.push(currentMove.Movename);
        //setNewPokemon(currentPokemon, pokemonId)
    }

  return (
    <View style={[styles.columnFlex,styles.move,{backgroundColor:moveColor}]}>
        <View style={[{height:50, width:50}]}>
            <NewButton name={"plus-circle"} pressFunction={addMove}></NewButton>
        </View>

        <Text>{currentMove.Movename}</Text>
        <Text>{currentMove.Description}</Text>
        <View style={[styles.rowFlex]}>
            <Text style={[{marginRight:50}]}>Type: {currentMove.Type}</Text>
            <Text> {currentMove.Damagetype}</Text>
        </View>
        <View style={[styles.rowFlex]}>
            <Text style={[{marginRight:50}]}>Target: {currentMove.Target}</Text>
            <Text>Power: {currentMove.Damagedice}</Text>
        </View>
        <Text>Damage Dice: {currentMove.Damagestat} + {currentMove.Damagedice}</Text>
        <Text>Accuracy Dice: {currentMove.Accuracydice} + {currentMove.Secondaccuracydice}</Text>
        <Text>Effect: {currentMove.Special}</Text>
    </View>
  )
}

export default PokemonMove

const styles = StyleSheet.create({
    columnFlex:{
        flex: 1,
        flexDirection:'column',
    },

    move:{
        borderWidth:1,
        borderColor:'black',
        padding:3,
        borderRadius:10,
    },

})