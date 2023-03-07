import React, {FunctionComponent} from "react";
import {View, StyleSheet, Text, Image} from "react-native"

import { RootStackParamList } from "../../src/navigation/RootStack"
import { StackScreenProps } from "@react-navigation/stack" 

type Props = StackScreenProps<RootStackParamList, "ResultShow">

const ResultShowScreen:FunctionComponent<Props> = ({route}) =>{
    console.log(route.name)
    return(
        <View style={styles.container}>
            <Image source={{uri: route.params.image_url}} style={styles.image}/>
            <Text>{route.params.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 250,
        height: 120,
        borderRadius: 4,
    },
    container:{
        flex: 1,
        alignItems: "center",
        marginTop: 20
    }
})

export default ResultShowScreen