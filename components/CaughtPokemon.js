import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import useStore from '../data/store';

const CaughtPokemon = ({ route, navigation }) => {
    const caughtPokemon = useStore(state => state.caughtPokemon)

    const pokemonId = route.params.params.id;
    const currentPokemon = caughtPokemon[pokemonId]
    console.log(currentPokemon)
    

  return (
    <View>
        <View>
            <Image/>
            <View>
                <View>
                    <Text>{currentPokemon.Name}</Text>
                    <Image/>
                </View>
                <View>
                    <Image/>
                    <Image/>
                </View>
                <View>
                    <Text>{currentPokemon.Rank}</Text>
                    <Text>nature</Text>
                </View>
            </View>
        </View>
        <View>
            <View>
                <View>
                    <Text>Strength: {currentPokemon.Strength} / {currentPokemon["Max Strength"]}</Text>
                    <Text>Dexterity: {currentPokemon.Dexterity} / {currentPokemon["Max Dexterity"]}</Text>
                    <Text>Vitality: {currentPokemon.Vitality} / {currentPokemon["Max Vitality"]}</Text>
                    <Text>Special: {currentPokemon.Special} / {currentPokemon["Max Special"]}</Text>
                    <Text>Insight: {currentPokemon.Insight} / {currentPokemon["Max Insight"]}</Text>
                </View>
                <View>
                    <View>
                        <Text>Brawl: {currentPokemon.Brawl}</Text>
                        <Text>Channel: {currentPokemon.Channel}</Text>
                        <Text>Clash: {currentPokemon.Clash}</Text>
                        <Text>Evasion: {currentPokemon.Evasion}</Text>
                    </View>
                    <View>
                        <Text>Alert: {currentPokemon.Alert}</Text>
                        <Text>Athletic: {currentPokemon.Athletic}</Text>
                        <Text>Nature: {currentPokemon.Nature}</Text>
                        <Text>Stealth: {currentPokemon.Stealth}</Text>
                    </View>
                    <View>
                        <Text>Allure: {currentPokemon.Allure}</Text>
                        <Text>Etiquette: {currentPokemon.Etiquette}</Text>
                        <Text>Intimidate: {currentPokemon.Intimidate}</Text>
                        <Text>Perform: {currentPokemon.Perform}</Text>
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text>HP: {currentPokemon["Total HP"] + currentPokemon.Vitality}</Text>
                    <Text>Will: {currentPokemon["Will"]}</Text>
                    <Text>Initiative: {currentPokemon["Initiative"]}</Text>
                    <Text>Evasion: {currentPokemon["Evasion Dice"]}</Text>
                    <Text>Clash (STR): {currentPokemon["Strength Clash"]}</Text>
                    <Text>Clash (SPE): {currentPokemon["Special Clash"]}</Text>
                    <Text>Def: {currentPokemon["Def"]}</Text>
                    <Text>Spe def: {currentPokemon["Spe. Def"]}</Text>
                </View>
                <View>
                    <Text>Victories: {currentPokemon["Victories"]}</Text>
                    <Text>Training: {currentPokemon["Training"]}</Text>
                    <Text>Happiness: {currentPokemon["Happiness"]}</Text>
                    <Text>Loyalty: {currentPokemon["Loyalty"]}</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default CaughtPokemon

const styles = StyleSheet.create({})