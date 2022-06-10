import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'

const Button = ({ name }) => {
  return (
    <View style ={styles.button}>
      <TouchableHighlight style ={styles.pressable}>
        <Text style ={styles.buttonText}>{name}</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    height:'100%',
    width:'49.5%'
  },
  pressable: {
    backgroundColor:'#3466AF',
    height:'100%',
    width:'100%',
    justifyContent:'center'
  },
  buttonText:{
    textAlign:'center',
    color:'white'
  }
})