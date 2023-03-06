import React, {FunctionComponent, } from "react";
import {View, StyleSheet, Text, FlatList } from "react-native"

import ResultDetail from "./ResultDetail";


//types
import { ResultListProps } from "./types";



const ResultList:FunctionComponent<ResultListProps> = ({ title, results}) => {   
    return(
        <View >
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal 
                data={results} 
                keyExtractor={result=>result.id} 
                renderItem={({item}: any) => <ResultDetail {...item}/> }
                showsHorizontalScrollIndicator={false} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
   title:{
    fontWeight:"bold",
    fontSize: 16,
    marginVertical:10
   },
  
})

export default ResultList;