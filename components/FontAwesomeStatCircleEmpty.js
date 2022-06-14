import { StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FontAwesomeStatCircleEmpty = () => {
  return (
    <FontAwesome name={"circle-o"} color={"white"} style={[styles.statCircles]}/>
  )
}

export default FontAwesomeStatCircleEmpty

const styles = StyleSheet.create({
  statCircles:{
    paddingLeft:3,
    fontSize: 15,
 },
})