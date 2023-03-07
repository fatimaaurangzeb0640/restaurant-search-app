import React, {useState, useCallback, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
import Searchbar from "../components/SearchBar";
import yelp from "../api/yelp";
import ResultList from "../components/ResultList";
import { ResultProps } from "../components/types";


import { RootStackParamList } from "../navigation/RootStack";
import { StackScreenProps } from "@react-navigation/stack" 


export type Props = StackScreenProps<RootStackParamList, "Search">

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const filterResultsByPrice = (price: string) =>{
       
            return results.filter((result: ResultProps) =>{
                return JSON.stringify(result.price) === JSON.stringify(price)
            })
    }

    const searchApi = useCallback( async ( searchTerm: string ) =>{
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
        })
    
        setResults(response.data.businesses)}
        catch{
            setErrorMessage('Something went wrong')
        }
    },[term])

    useEffect(()=>{
        searchApi(term)
    },[])
   

    const handleOnSubmit = () =>{
        searchApi(term)
    }
    return(
        <View style={styles.appBackground}>
            {results.length===0?
            <ActivityIndicator  
                animating = {true}
                color = '#bc2b78'
                size = "large"
                style = {styles.activityIndicator}
            />
            :
            <>
                <Searchbar term={term} handleOnChange={newTerm=> setTerm(newTerm)} handleOnSubmit={handleOnSubmit} />
                <Text style={styles.title}>We have found {results.length} results</Text>
                <ScrollView>
                    <ResultList title={"Cost Effective"} results={filterResultsByPrice('$')}></ResultList>
                    <ResultList title={"Bit Pricier"} results={filterResultsByPrice('$$')}></ResultList>
                    <ResultList title={"Big Spender"} results={filterResultsByPrice('$$$')}></ResultList>
                </ScrollView>
                <Text>{errorMessage}</Text>
            </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    appBackground:{
        backgroundColor:"#fff",
        flex:1,
        paddingHorizontal: 15
    },
    title:{
        marginVertical: 10
    },
    activityIndicator:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }

})

export default SearchScreen;