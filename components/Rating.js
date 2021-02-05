import React from "react"
import {View,StyleSheet,Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const Rating =(props) => {
    const {container,star,rate,votes} = styles
    return (
        <View style={container}>
            <Ionicons style={star} name="ios-star"/>
            <Text style={rate} >4.8</Text>
            <Text style={votes} >(2256)</Text>
        </View>

    )
}

const styles =StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:15,
        width:148,
        height:27,
        paddingHorizontal:27,
         

    },
    star:{
        color:'#ffdd4f'

    },
    rate:{
        color:'white',
        fontFamily:"Montserrat-Medium",
        fontSize:16,
        fontWeight:'500',
        lineHeight:16,

    },
    votes:{
        color:'white',
        opacity:0.5,
        fontWeight:'400',
        lineHeight:16,

    },

})
export default Rating;