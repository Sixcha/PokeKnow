import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style= {styles.heading}>
        <Image 
            style= {styles.logo}
            source= {require('../images/poke_know_logo.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        backgroundColor: '#27292c',
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        borderBottomWidth:2
    },
    logo: {
        width: '90%',
        resizeMode: 'contain'
    }
})

export default Header