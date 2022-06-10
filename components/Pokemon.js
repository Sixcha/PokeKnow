import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const Pokemon = ({id, name, type1, type2, color, pressFunction, longPressFunction}) => {

  const [picture, setPicture] = useState()

  const shortenId = (id) => {
    const newId = id.id;
    const finalId = newId.replace(/([#][0]{1,4})|([#])/g,'')
    if (isNaN(finalId)){
      return 132
    }
    else{
      return finalId;
    }
  }

  const getPicture = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+ shortenId({id}))
    .then(res => {
      return res.json()
    })
    .then(res => {
      const picString = res.sprites.front_default.toString();
      setPicture(picString);
    })
    .catch(e => {
      //console.log(e)
    })
  }

  /* useEffect(() => {
    getPicture();
  }, [])  */
  

  return (
      <TouchableOpacity style={[styles.pokemonFlexItem,{backgroundColor: color}]} onPress={() => pressFunction(name)}  /* onLongPress={() => longPressFunction()} */ >
        <View style={styles.pokemonFlexContainer}>
          <Image style={styles.pokemonImage}  /* source={{uri: picture}} */ />
          <View style={styles.pokemonFlexFix}>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <View>
              <Text>{type1}</Text>
              <Text>{type2}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
  )
}

export default Pokemon

const styles = StyleSheet.create({
  pokemonFlexItem:{
    flexBasis:'45%',
    alignItems:'center',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom:10,
    padding:0
  },
  pokemonFlexContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:'100%',
    width:'100%'
  },
  pokemonImage:{
    resizeMode:'contain',
    width:'95%',
    height:'95%',
    //backgroundColor:'red',
    flexBasis:'44%',
  },
  pokemonFlexFix:{
    flexBasis:'56%',
    alignItems:'center',
    height:'100%',
    //backgroundColor:'green'
  },
  pokemonName:{
    textAlign:'justify'
  }
})