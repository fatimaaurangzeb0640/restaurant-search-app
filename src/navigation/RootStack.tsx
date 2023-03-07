import React, {FunctionComponent} from "react";
import {StyleSheet} from "react-native"

import SearchScreen from "../screens/Search";
import ResultShowScreen from "../screens/ResultShow";


//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"

//types
import { ResultProps } from "../components/types";

export type RootStackParamList = {
    Search: undefined
    ResultShow: ResultProps
}
 
const Stack = createStackNavigator<RootStackParamList>();

const RootStack : FunctionComponent = () =>{
    return (
       
        <NavigationContainer>
            <Stack.Navigator initialRouteName= "Search" screenOptions={{
            }}>
               <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
              
                <Stack.Screen
                name="ResultShow" 
                    component={ResultShowScreen} 
                    options={({route}) => ({
                        headerTitle: route?.params?.name,
                })}   
                />
            </Stack.Navigator>
        </NavigationContainer>
         
    )}

const styles = StyleSheet.create({
})

export default RootStack;