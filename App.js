import React from 'react'
import {View,Text,FlatList,StyleSheet, TextInput} from 'react-native'
import Products from './components/Products'
import product_data from './product_data.json'

function App(){

    const renderProducts = ({item}) => <Products product = {item}/>
    const extractKeys = (item,keys) => item.id.toString()

    return(
        <View style = {styles.container}>

            <Text style = {styles.title}> PATISTORE </Text>
            <TextInput
                style = {styles.input}
                placeholder = {"Ara.."}
                
        
            />
            <View style = {styles.flatlist}>
                <FlatList
                 keyExtractor = {extractKeys}
                 numColumns={2}
                 data = {product_data}
                 renderItem = {renderProducts}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },

    flatlist:{
        flex: 1,
        alignContent: "center",
        backgroundColor: "white"
    },

    input:{
        backgroundColor: "#eceff1",
        borderRadius:10,
        margin: 10,
        fontSize: 18,
        fontFamily: "Nunito"
    },

    title:{
        fontWeight: "bold",
        fontSize: 40,
        color: "purple",
        fontFamily: "Nunito"
    }
})

export default App