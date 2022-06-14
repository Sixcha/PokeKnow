import { StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FontAwesomeStatCircleFull = () => {
  return (
    <FontAwesome name={"circle"} color={"white"} style={[styles.statCircles]}/>
  )
}

export default FontAwesomeStatCircleFull

const styles = StyleSheet.create({
  statCircles:{
    paddingLeft:3,
    fontSize: 15,
 },
})