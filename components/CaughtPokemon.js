import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CaughtPokemon = () => {
  return (
    <View>
        <View>
            <Image/>
            <View>
                <View>
                    <Text>Name</Text>
                    <Image/>
                </View>
                <View>
                    <Image/>
                    <Image/>
                </View>
                <View>
                    <Text>rank</Text>
                    <Text>nature</Text>
                </View>
            </View>
        </View>
        <View>
            <View>
                <View>
                    <Text>STR</Text>
                    <Text>DEX</Text>
                    <Text>VIT</Text>
                    <Text>SPE</Text>
                    <Text>INS</Text>
                </View>
                <View>
                    <View>
                        <Text>Fight Skills</Text>
                    </View>
                    <View>
                        <Text>Survival Skills</Text>
                    </View>
                    <View>
                        <Text>Social Skills</Text>
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text>HP</Text>
                    <Text>Will</Text>
                    <Text>Init</Text>
                    <Text>Evasion</Text>
                    <Text>Clash (STR)</Text>
                    <Text>Clash (SPE)</Text>
                    <Text>Def</Text>
                    <Text>Spe def</Text>
                </View>
                <View>
                    <Text>Victories</Text>
                    <Text>Training</Text>
                    <Text>Happiness</Text>
                    <Text>Loyalty</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default CaughtPokemon

const styles = StyleSheet.create({})