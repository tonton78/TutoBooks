import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

 const Headers = (props)=> {
     const{container,closeIcon,cartIcon} = styles
     return(
         <View style={container}>
             <Ionicons style={closeIcon} name='ios-close'/>
             <Ionicons style={cartIcon} name='ios-cart'/>


         </View>

     )
 }

 const styles = StyleSheet.create({
     container:{
         flexDirection: 'row',
         justifyContent:'space-around',
         width:'100%',
         alignItems:'center',
         paddingHorizontal: 38,
         marginVertical:20,
         marginBottom:28,
        
     },
     closeIcon:{
         fontSize: 45,
         color:'white',

     },
     cartIcon:{
         fontSize:30,
         color:'white',

     },

 })
 export default Headers ;