import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const NewButton = ({name, pressFunction }) => {
  return (
      <TouchableOpacity style ={[styles.pressable, {backgroundColor:'#36393E'}]} onPress={() => pressFunction()}>
        <Feather name={name} style={styles.buttonSymbol}></Feather>
      </TouchableOpacity>
  )
}

export default NewButton

const styles = StyleSheet.create({
  pressable: {
    height:'100%',
    width:'100%',
    justifyContent:'center',
    
  },
  buttonSymbol:{
    color:'white',
    fontSize:23,
    justifyContent:'center'
  }
})