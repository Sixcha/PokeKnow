import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { useRoute, useNavigation  } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import Pokemons from './Pokemons';
import MyPokemon from './MyPokemon';
import PokemonStats from '../data/PokeLearnStats.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
import useStore from '../data/store';

const Main = () => {
  const caughtPokemon = useStore(state => state.caughtPokemon)
  const changeCaughtPokemon = useStore(state => state.setCaughtPokemon)

  const navigation = useNavigation();
  const route = useRoute();
  const [currentRoute, setCurrentRoute] = useState(route.name)

  const window = useWindowDimensions();

  const setStats = (newPokemon) => {
    newPokemon["Total HP"] = newPokemon["HP"];
    newPokemon["Will"] = newPokemon["Insight"] + 2;
    newPokemon["Initiative"] = newPokemon["Dexterity"];
    newPokemon["Strength Clash"] = newPokemon["Strength"];
    newPokemon["Special Clash"] = newPokemon["Special"];
    newPokemon["Evasion Dice"] = newPokemon["Dexterity"];
    newPokemon["Def"] = newPokemon["Vitality"];
    newPokemon["Spe. Def"] = newPokemon["Insight"];

    newPokemon["Victories"] = 0
    newPokemon["Training"] = 0
    newPokemon["Happiness"] = 1
    newPokemon["Loyalty"] = 1
    newPokemon["Rank"] = "Starter"
    
    newPokemon["Tough"] = 1
    newPokemon["Cool"] = 1
    newPokemon["Beauty"] = 1
    newPokemon["Cute"] = 1
    newPokemon["Clever"] = 1
    
    newPokemon.Brawl = 0
    newPokemon.Channel = 0
    newPokemon.Clash = 0
    newPokemon.Evasion = 0
    newPokemon.Alert = 0
    newPokemon.Athletic = 0
    newPokemon.Nature = 0
    newPokemon.Stealth = 0
    newPokemon.Allure = 0
    newPokemon.Etiquette = 0
    newPokemon.Intimidate = 0
    newPokemon.Perform = 0
  }

  //Add to Caught pokemon
  const addToTeam = (pkmnName, key) => {
    const newPokemon = PokemonStats.find((pkmn) => {
      return pkmn.Name === pkmnName
    })
    setStats(newPokemon)
    changeCaughtPokemon(newPokemon)
  }

  //TODO: Open stats window for pokemon
  const checkPkmn = (pkmnName, number) => {
    navigation.navigate('ChosenPokemon',
    {
      params: { id: number },
    })
  }

  //Render
  const renderBasedOnRoute = () => {
    if ( currentRoute === "All Pokemon" ){
      return <Pokemons style={styles.allPokemon} pressFunction={addToTeam}/>
    }
    else if ( currentRoute === "My Team") {
      return <MyPokemon style={styles.allPokemon} pressFunction={checkPkmn}/>
    }
  }

  return (
    <View style={[styles.background, {minHeight: window.height}]}>
      {renderBasedOnRoute()}
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#36393E',
    },
    allPokemon:{
        Height: '100%',
        backgroundColor:'#36393E',
    }
})