import React from 'react'
import {View,TouchableOpacity,Text, StyleSheet} from 'react-native'

const Action = props => {
    const {container,price,priceContent,preview,previewContent} = styles
    return (
        <View style={container}>
            <TouchableOpacity onPress={() => {}} style={price}>
                <Text style={priceContent}>19.99$</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={preview}>
                <Text style={previewContent}>Free Preview</Text>
            </TouchableOpacity>
             
        </View>

    )
}

const styles = StyleSheet.create ({
    container:{
        flexDirection:"row",
        width:271,
        height:48,
        justifyContent:'center',
        alignItems:"center",
        marginTop:10,

    },
    price:{
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:48,
        backgroundColor: 'white',
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,


    },
    priceContent:{
        fontFamily:"Montserrat-Black",
        fontWeight:"700",
        lineHeight:20,
        fontSize:20,

    },
    preview:{
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:48,
        backgroundColor: '#ef8262',
        color:"white",
        borderTopRightRadius:15,
        borderBottomRightRadius:15,

    },
    previewContent:{
        fontFamily:"Gilroy-Bold",
        fontWeight:"700",
        lineHeight:16,
        fontSize:16,
        color:"white",

    },

})

export default Action;