import {StyleSheet,Dimensions} from 'react-native'

export default StyleSheet.create({

    container:{
        margin:7.5,
        backgroundColor:"#eceff1",
        borderRadius:10,
    },

    image: {
        height: 160,
        width:165,
        borderRadius:10,
    },

    title:{
        fontSize:20,
        fontFamily:"Nunito",
        fontWeight:"bold",
        color:"black",
        width:180,
        paddingLeft:7,
        paddingRight:7,
    },

    price:{
        fontSize:18,
        fontWeight:"bold",
        paddingLeft:7,
        paddingRight:7,
    },

    image_view:{
        padding:7.5,
    },

    inStock:{
        fontFamily: "Nunito",
        color: "red",
        fontWeight: "bold",
        paddingLeft: 7,
        paddingRight: 7,
    }
})