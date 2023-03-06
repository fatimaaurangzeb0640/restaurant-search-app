import React, {useState, useCallback, useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import Searchbar from "../components/SearchBar";
import yelp from "../api/yelp";
import axios from "axios"
import ResultList from "../components/ResultList";
import { ResultProps } from "../components/types";




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
            <Searchbar term={term} handleOnChange={newTerm=> setTerm(newTerm)} handleOnSubmit={handleOnSubmit} />
            <Text style={styles.title}>We have found {results.length} results</Text>
            <ResultList title={"Cost Effective"} results={filterResultsByPrice('$')}></ResultList>
            <ResultList title={"Bit Pricier"} results={filterResultsByPrice('$$')}></ResultList>
            <ResultList title={"Big Spender"} results={filterResultsByPrice('$$$')}></ResultList>
            <Text>{errorMessage}</Text>
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
    }

})

export default SearchScreen;