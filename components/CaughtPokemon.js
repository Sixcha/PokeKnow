import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import useStore from '../data/store';

const CaughtPokemon = ({ route, navigation }) => {
    const caughtPokemon = useStore(state => state.caughtPokemon)

    const pokemonId = route.params.params.id;
    const currentPokemon = caughtPokemon[pokemonId]
    console.log(currentPokemon)
    

  return (
    <View style={[styles.background]}>
        <View style={[styles.topBox]}>
            <Image source={require('../images/ditto.png')}/>
            <View>
                <View style={[styles.rowFlex]}>
                    <Text style={[styles.whiteText, styles.pokemonName]}>{currentPokemon.Name}</Text>
                    <Image/>
                </View>
                <View style={[styles.rowFlex]}>
                    <Image/>
                    <Image/>
                </View>
                <View style={[styles.rowFlex]}>
                    <Text style={[styles.whiteText]}>{currentPokemon.Rank}</Text>
                    <Text style={[styles.whiteText]}>nature</Text>
                </View>
            </View>
        </View>
        <View style={[styles.bottomBox]}>
            <View style={[styles.columnFlexBig]}>
                <View style={[styles.columnFlexSeparated]}>
                    <View style={[styles.statBorder]}>
                        <View style={[styles.rowFlexSeparated]}>
                            <Text style={[styles.statText]}> Strength:</Text>
                            <Text style={[styles.statText]}>{currentPokemon.Strength} / {currentPokemon["Max Strength"]} </Text>
                        </View>
                        <Text style={[styles.whiteText]}> BALLZ </Text>
                    </View>
                    <View style={[styles.statBorder]}>
                        <View style={[styles.rowFlexSeparated]}>
                            <Text style={[styles.statText]}> Dexterity:</Text>
                            <Text style={[styles.statText]}>{currentPokemon.Dexterity} / {currentPokemon["Max Dexterity"]} </Text>
                        </View>
                        <Text style={[styles.whiteText]}> BALLZ </Text>
                    </View>
                    <View style={[styles.statBorder]}>
                        <View style={[styles.rowFlexSeparated]}>
                            <Text style={[styles.statText]}> Vitality:</Text>
                            <Text style={[styles.statText]}>{currentPokemon.Vitality} / {currentPokemon["Max Vitality"]} </Text>
                        </View>
                        <Text style={[styles.whiteText]}> BALLZ </Text>
                    </View>
                    <View style={[styles.statBorder]}>
                        <View style={[styles.rowFlexSeparated]}>
                            <Text style={[styles.statText]}> Special:</Text>
                            <Text style={[styles.statText]}>{currentPokemon.Special} / {currentPokemon["Max Special"]} </Text>
                        </View>
                        <Text style={[styles.whiteText]}> BALLZ </Text>
                    </View>
                    <View style={[styles.statBorder]}>
                        <View style={[styles.rowFlexSeparated]}>
                            <Text style={[styles.statText]}> Insight:</Text>
                            <Text style={[styles.statText]}>{currentPokemon.Insight} / {currentPokemon["Max Insight"]} </Text>
                        </View>
                        <Text style={[styles.whiteText]}> BALLZ </Text>

                    </View>
                    
                    
                    

                </View>
                <View style={[styles.rowFlex]}>
                    <View style={[styles.columnFlex]}>
                        <Text style={[styles.whiteText]}>Brawl: {currentPokemon.Brawl}</Text>
                        <Text style={[styles.whiteText]}>Channel: {currentPokemon.Channel}</Text>
                        <Text style={[styles.whiteText]}>Clash: {currentPokemon.Clash}</Text>
                        <Text style={[styles.whiteText]}>Evasion: {currentPokemon.Evasion}</Text>
                    </View>
                    <View style={[styles.columnFlex]}>
                        <Text style={[styles.whiteText]}>Alert: {currentPokemon.Alert}</Text>
                        <Text style={[styles.whiteText]}>Athletic: {currentPokemon.Athletic}</Text>
                        <Text style={[styles.whiteText]}>Nature: {currentPokemon.Nature}</Text>
                        <Text style={[styles.whiteText]}>Stealth: {currentPokemon.Stealth}</Text>
                    </View>
                    <View style={[styles.columnFlex]}>
                        <Text style={[styles.whiteText]}>Allure: {currentPokemon.Allure}</Text>
                        <Text style={[styles.whiteText]}>Etiquette: {currentPokemon.Etiquette}</Text>
                        <Text style={[styles.whiteText]}>Intimidate: {currentPokemon.Intimidate}</Text>
                        <Text style={[styles.whiteText]}>Perform: {currentPokemon.Perform}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.columnFlex]}>
                <View style={[styles.columnFlexSeparated, {paddingBottom:2}]}>
                    <Text style={[styles.whiteText]}>   HP: {currentPokemon["Total HP"] + currentPokemon.Vitality}</Text>
                    <Text style={[styles.whiteText]}>   Will: {currentPokemon["Will"]}</Text>
                    <Text style={[styles.whiteText]}>   Initiative: {currentPokemon["Initiative"]}</Text>
                    <Text style={[styles.whiteText]}>   Evasion: {currentPokemon["Evasion Dice"]}</Text>
                    <Text style={[styles.whiteText]}>   Clash (STR): {currentPokemon["Strength Clash"]}</Text>
                    <Text style={[styles.whiteText]}>   Clash (SPE): {currentPokemon["Special Clash"]}</Text>
                    <Text style={[styles.whiteText]}>   Def: {currentPokemon["Def"]}</Text>
                    <Text style={[styles.whiteText]}>   Spe Def: {currentPokemon["Spe. Def"]}</Text>
                </View>
                <View style={[styles.columnFlex]}>
                    <Text style={[styles.whiteText]}>{/* Victories: {currentPokemon["Victories"]} */}</Text>
                    {/* <Text style={[styles.whiteText]}>Training: {currentPokemon["Training"]}</Text>
                    <Text style={[styles.whiteText]}>Happiness: {currentPokemon["Happiness"]}</Text>
                    <Text style={[styles.whiteText]}>Loyalty: {currentPokemon["Loyalty"]}</Text> */}
                </View>
            </View>
        </View>
    </View>
  )
}

export default CaughtPokemon

const styles = StyleSheet.create({

    background:{
        backgroundColor:'#36393E',
        flex: 1,
    },

    topBox:{
        flex: 1,
        flexDirection:'row',
    },

    bottomBox:{
        flex: 2,
        flexDirection:'row',
        marginLeft:20,
    },

    rowFlex:{
        flex: 1,
        flexDirection:'row',
    },

    columnFlex:{
        flex: 1,
        flexDirection:'column',
    },

    rowFlexSeparated:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    columnFlexSeparated:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'space-between',
        //paddingBottom:20
    },

    columnFlexBig:{
        flex: 2,
        flexDirection:'column',
    },

    whiteText:{
        color:'white',
    },

    statText:{
        color:'white',

    },

    statBorder:{
        borderWidth:1.5,
        borderRadius:5,
        borderColor:'#4f535a',
        flex:1
    },

    pokemonName:{
        fontSize:25
    }

})