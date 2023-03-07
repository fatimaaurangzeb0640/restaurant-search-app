import React, {FunctionComponent, } from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"


//types
import { ResultProps } from "./types";

import {useNavigation} from "@react-navigation/native"

import {Props as SearchProps} from "../screens/Search"



const ResultDetail:FunctionComponent<ResultProps> = ( props) => {
    const {image_url, name, rating, review_count} = props

    const navigation = useNavigation<SearchProps["navigation"]>()

    const handlePress = () =>{
        navigation.navigate("ResultShow", {...props })
    }
   
    return(
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.listItem}>
                <Text style={styles.name}>{name}</Text>
                {/*For images from a remote source */}
                <Image style={styles.image} source={{uri: image_url}} />
                <Text style={styles.subtitle}>{rating} Stars, {review_count} Reviews</Text>
            
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    name:{
        fontWeight:"bold",
        marginBottom:5
    },
    image:{
        width: 250,
        height: 120,
        borderRadius: 4
    },
    listItem:{
        marginRight: 15
    },
    subtitle:{
        marginTop:5
    }

})

export default ResultDetail;