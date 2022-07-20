import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PokemonMoves from '../data/PokeMoveSorted.json'
import colours from '../data/TypeColours.json';

const PokemonMove = ({ name }) => {
    const currentMove = PokemonMoves.find(move => 
        move.Movename === name
    )
    const moveColor = colours[currentMove['Type']]
  return (
    <View style={[styles.columnFlex,styles.move,{backgroundColor:moveColor}]}>
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
        <Text>Damage Dice: {currentMove.Damagestat} + {currentMove.Damagedice} = {currentMove.Damagedice + currentMove.Damagestat}</Text>
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