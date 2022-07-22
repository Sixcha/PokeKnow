import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PokemonMoves from '../data/PokeMoveSorted.json'
import colours from '../data/TypeColours.json';
import useStore from '../data/store';
import NewButton from './NewButton';

const PokemonMoveLearned = ({ name }) => {
    const caughtPokemon = useStore(state => state.caughtPokemon)
    const pokemonId = useStore(state => state.selectedPokemonID)
    const currentPokemon = caughtPokemon[pokemonId]

    const currentMove = PokemonMoves.find(move => 
        move.Movename === name
    )

    const damageCheck = currentMove.Damagestat[0] + currentMove.Damagestat.substring(1).toLowerCase()
    const accuracyCheck = currentMove.Accuracydice[0] + currentMove.Accuracydice.substring(1).toLowerCase()
    const accuracyCheck2 = currentMove.Secondaccuracydice[0] + currentMove.Secondaccuracydice.substring(1).toLowerCase()

    const totalDamage = currentPokemon[damageCheck] + currentMove.Damagedice
    const totalAccuracy = currentPokemon[accuracyCheck] + currentPokemon[accuracyCheck2]

    const calculateAccuracy = () => {
        if (isNaN(totalAccuracy)){
            return "???"
        } else {
            return totalAccuracy
        }
    } 

    const calculateDamage = () => {
        if (isNaN(totalDamage)) {
            return "???"
        } else {
            return totalDamage
        }
    }
    

    const finalAccuracy = calculateAccuracy()
    const finalDamage = calculateDamage()

    const removeMove = () => {
        
    }

    const moveColor = colours[currentMove['Type']]    
  return (
    <View style={[styles.columnFlex,styles.move,{backgroundColor:moveColor}]}>
        <View style={[{height:50, width:50}]}>
            <NewButton name={"trash-2"} pressFunction={removeMove}></NewButton>
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
        <Text>Damage Dice: {currentMove.Damagestat} + {currentMove.Damagedice} = {finalDamage}</Text>
        <Text>Accuracy Dice: {currentMove.Accuracydice} + {currentMove.Secondaccuracydice} = {finalAccuracy}</Text>
        <Text>Effect: {currentMove.Special}</Text>
    </View>
  )
}

export default PokemonMoveLearned

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