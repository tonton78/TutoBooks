import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import Constants from 'expo-constants'
import {Ionicons} from '@expo/vector-icons'
import Headers from '../components/Headers'
import Cover from '../components/Cover'
import Title from '../components/Title'
import Rating from '../components/Rating'
import Action from '../components/Action'
import CoverList from '../components/CoverList'

const Book1 = require ("../assets/Images/book1.png");

const images = [
    {imageSrc: require('../assets/Images/book1.png'),id :'1'},
    {imageSrc: require('../assets/Images/book2.png'),id :'2'},
    {imageSrc: require('../assets/Images/book3.png'),id :'3'},
    {imageSrc: require('../assets/Images/book4.png'),id :'4'},
    {imageSrc: require('../assets/Images/book5.png'),id :'5'},
    {imageSrc: require('../assets/Images/book6.png'),id :'6'}
]



const Bookscreens = props => {
    return (
        <ScrollView>
        
         <View style={styles.container}>
            <Text>Book Screen</Text>
            <Headers/>
            <Cover image ={Book1}/>
            <Title title="The Jungle Book"/>
            <Title title="Rudyard Kliping" customStyle={styles.sbTitle}/>
            <Rating/>
            <Action/>
            <Title left title="You may also like" customStyle={styles.leftStyle}/>
            <CoverList images={images}/>
            
            
         </View>

        </ScrollView>

    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'black',
        alignItems:'center',
        paddingBottom:20, 
        marginTop:Constants.statusBarHeight,
    },
    sbTitle:{
        opacity:0.7,
        fontFamily:"waltographUI",
        fontSize: 18,
        fontWeight: '500',
        lineHeight:18,
        marginTop:16,
    },
    leftStyle:{
        color:'white',
        fontFamily:'Gilroy-Bold',
        fontSize:16,

    }

});

export default Bookscreens;