import React from 'react'
import {View,Text,Image} from 'react-native'
import styles from './Products.style'


const Products = ({product}) => {

    return(
    <View style = {styles.container}>
     <View style = {styles.image_view}>
        <Image style = {styles.image} source = {{uri: product.imgURL}}/>
     </View>
            <View >
                <Text style = {styles.title}> {product.title} </Text>
                <Text style = {styles.price}> {product.price} </Text>
                <Text style = {styles.inStock}> {product.inStock ? "" : "STOKTA YOK"}</Text>
            </View> 
    </View>

    )
   
}

export default Products