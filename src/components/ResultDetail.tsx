import React, {FunctionComponent, } from "react";
import {View, StyleSheet, Text, FlatList, Image } from "react-native"


//types
import { ResultProps } from "./types";



const ResultDetail:FunctionComponent<ResultProps> = ( result) => {
    const {image_url, name} = result
   
    return(
        <View style={styles.listItem}>
            <Text style={styles.name}>{name}</Text>
            {/*For images from a remote source */}
            <Image style={styles.image} source={{uri: image_url}} />
            <Text style={styles.subtitle}>{result.rating} Stars, {result.review_count} Reviews</Text>
           
        </View>
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