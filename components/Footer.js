import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Button name='All Pokemon' />
      <Button name='My Team' />
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'blue',
        height: '10%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
    }
})