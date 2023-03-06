import React, {FunctionComponent, useState} from "react";
import {View, StyleSheet, TextInput, Text, TouchableHighlight} from "react-native"
import {Feather} from "@expo/vector-icons"

//types
import { SearchBarProps } from "./types";

const Searchbar:FunctionComponent<SearchBarProps> = ({ term, handleOnChange, handleOnSubmit}) => {
   
    return(
        <View style={styles.background}>
            <Feather name="search" size={30} style={styles.icon} />
            <TouchableHighlight>
                <TextInput value={term} onChangeText={handleOnChange} onEndEditing={handleOnSubmit} style={styles.input} placeholder="Search"/>   
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:"#F0EEEE",
        height: 50,
        flexDirection: "row",
        // marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 8,
        alignItems:"center"
        
    },
    input:{

    },
    icon:{
        marginHorizontal:8
    }

})

export default Searchbar;