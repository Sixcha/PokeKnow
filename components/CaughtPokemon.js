import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import useStore from '../data/store';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesomeStatCircleFull from './FontAwesomeStatCircleFull';
import FontAwesomeStatCircleEmpty from './FontAwesomeStatCircleEmpty';
import PokemonAbilities from '../data/PokeRoleAbilities.json';
import colours from '../data/TypeColours.json'

const CaughtPokemon = ({ route, navigation }) => {
    const caughtPokemon = useStore(state => state.caughtPokemon)

    const pokemonId = route.params.params.id;
    const currentPokemon = caughtPokemon[pokemonId]
    const statsToCheck = ["Strength","Dexterity","Vitality","Special","Insight"]
    let statsToDistribute = [[],[],[],[],[]]
    
    const setCurrentStats = () => {
        for (let i = 0; i < statsToCheck.length; i++) {
            let statToCheck = statsToCheck[i]
            let statMax = "Max "+statToCheck
            let statEmptyCircles = currentPokemon[statMax] - currentPokemon[statToCheck]
            for (let j = 0; j < currentPokemon[statToCheck]; j++) {
                statsToDistribute[i].push(1)
            }
            for (let k = 0; k < statEmptyCircles; k++) {
                statsToDistribute[i].push(0)
            }
            
        }
    }

    const checkForSecondType = () => {
        if (currentPokemon["Type 2"] != "") {
            const type2Colour = colours[currentPokemon['Type 2'].toLowerCase()]
            return (
                <Text style={[styles.typeText, {backgroundColor:type2Colour}]}>{currentPokemon["Type 2"]}</Text>
            )
        }
    }

    const type1Colour = colours[currentPokemon['Type 1'].toLowerCase()]

    setCurrentStats()


  return (
    <SafeAreaView style={[styles.background]}>
        <ScrollView>
            <View style={[styles.topBox]}>
                <Image source={require('../images/ditto.png')}/>
                <View style={[styles.columnFlex]}>
                    <View style={[styles.rowFlex]}>
                        <Text style={[styles.whiteText, styles.pokemonName]}>{currentPokemon.Name}</Text>
                        <Image/>
                    </View>
                    <View style={[styles.rowFlex]}>
                        <View style={[styles.rowFlex]}>
                            <Text style={[styles.typeText, {backgroundColor:type1Colour}]}>{currentPokemon["Type 1"]}</Text>
                            {checkForSecondType()}
                        </View>
                    </View>
                    <View style={[styles.rowFlex]}>
                        <Text style={[styles.whiteText, {marginRight:10}]}>{currentPokemon.Rank}</Text>
                        <Text style={[styles.whiteText]}>nature</Text>
                    </View>
                    <View style={[styles.columnFlex]}>
                        <Text style={[styles.whiteText]}>Ability: {currentPokemon["Current Ability"]}</Text>
                        <Text style={[styles.whiteText, {flexShrink:1}]}>{PokemonAbilities.map((ability, i) => {
                            if (ability.Name === currentPokemon["Current Ability"])
                            return (
                                <Text style={[styles.whiteText]} key={i}>{ability.Effect}</Text>
                            )
                            })}
                        </Text>
                    </View>
                    <View style={[styles.rowFlex, {marginTop:10}]}>
                        <View style={[styles.columnFlex]}>
                            <Text style={[styles.whiteText]}>Happiness: {currentPokemon["Happiness"]}</Text>
                            <Text style={[styles.whiteText]}>Loyalty: {currentPokemon["Loyalty"]}</Text>
                        </View>
                        <View style={[styles.columnFlex]}>
                            <Text style={[styles.whiteText]}>Victories: {currentPokemon["Victories"]}</Text>
                            <Text style={[styles.whiteText]}>Training: {currentPokemon["Training"]}</Text>
                        </View>
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
                            <View style={[styles.rowFlex]}>
                                {statsToDistribute[0].map( (number, i) => {
                                    if (number === 1){
                                        return (
                                            <FontAwesomeStatCircleFull key={i}/>
                                        )
                                    }
                                    else {
                                        return (
                                            <FontAwesomeStatCircleEmpty key={i}/>
                                        )
                                    }

                                })}
                            </View>
                            
                        </View>
                        <View style={[styles.statBorder]}>
                            <View style={[styles.rowFlexSeparated]}>
                                <Text style={[styles.statText]}> Dexterity:</Text>
                                <Text style={[styles.statText]}>{currentPokemon.Dexterity} / {currentPokemon["Max Dexterity"]} </Text>
                            </View>
                            <View style={[styles.rowFlex]}>
                                {statsToDistribute[1].map( (number, i) => {
                                    if (number === 1){
                                        return (
                                            <FontAwesomeStatCircleFull key={i}/>
                                        )
                                    }
                                    else {
                                        return (
                                            <FontAwesomeStatCircleEmpty key={i}/>
                                        )
                                    }

                                })}
                            </View>
                        </View>
                        <View style={[styles.statBorder]}>
                            <View style={[styles.rowFlexSeparated]}>
                                <Text style={[styles.statText]}> Vitality:</Text>
                                <Text style={[styles.statText]}>{currentPokemon.Vitality} / {currentPokemon["Max Vitality"]} </Text>
                            </View>
                            <View style={[styles.rowFlex]}>
                                {statsToDistribute[2].map( (number, i) => {
                                    if (number === 1){
                                        return (
                                            <FontAwesomeStatCircleFull key={i}/>
                                        )
                                    }
                                    else {
                                        return (
                                            <FontAwesomeStatCircleEmpty key={i}/>
                                        )
                                    }

                                })}
                            </View>
                        </View>
                        <View style={[styles.statBorder]}>
                            <View style={[styles.rowFlexSeparated]}>
                                <Text style={[styles.statText]}> Special:</Text>
                                <Text style={[styles.statText]}>{currentPokemon.Special} / {currentPokemon["Max Special"]} </Text>
                            </View>
                            <View style={[styles.rowFlex]}>
                                {statsToDistribute[3].map( (number, i) => {
                                    if (number === 1){
                                        return (
                                            <FontAwesomeStatCircleFull key={i}/>
                                        )
                                    }
                                    else {
                                        return (
                                            <FontAwesomeStatCircleEmpty key={i}/>
                                        )
                                    }

                                })}
                            </View>
                        </View>
                        <View style={[styles.statBorder]}>
                            <View style={[styles.rowFlexSeparated]}>
                                <Text style={[styles.statText]}> Insight:</Text>
                                <Text style={[styles.statText]}>{currentPokemon.Insight} / {currentPokemon["Max Insight"]} </Text>
                            </View>
                            <View style={[styles.rowFlex]}>
                                {statsToDistribute[4].map( (number, i) => {
                                    if (number === 1){
                                        return (
                                            <FontAwesomeStatCircleFull key={i}/>
                                        )
                                    }
                                    else {
                                        return (
                                            <FontAwesomeStatCircleEmpty key={i}/>
                                        )
                                    }

                                })}
                            </View>

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
                    <View style={[styles.columnFlexSeparated, {paddingBottom:30}]}>
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
                        <Text/>
                    </View>
                </View>
            </View>
            <View style={[styles.bottomBox]}>
                <View style={[styles.columnFlex,styles.move,{backgroundColor:type1Colour}]}>
                    <Text>Tail Glow</Text>
                    <Text>The user emits a strong light. This Pokémon will stare at its brightness to enter a trance.</Text>
                    <View style={[styles.rowFlex]}>
                        <Text style={[{marginRight:50}]}>Type: Bug</Text>
                        <Text> Support</Text>
                    </View>
                    <View style={[styles.rowFlex]}>
                        <Text style={[{marginRight:50}]}>Target: User</Text>
                        <Text>Power: 0</Text>
                    </View>
                    <Text>Damage Dice: None</Text>
                    <Text>Accuracy Dice: INSIGHT + NATURE</Text>
                    <Text>Effect: Increase the User's Special by 3.</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
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
        marginBottom:25
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

    statCircles:{
       paddingLeft:3,
       fontSize: 15,
    },

    pokemonName:{
        fontSize:25
    },

    typeText:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:10,
        color:'white',
        padding:3,
        marginRight:10,
    },

    move:{
        borderWidth:1,
        borderColor:'#4f535a',
        padding:3,
        borderRadius:10,
    }

})