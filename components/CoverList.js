import React from 'react'
import {FlatList,TouchableOpacity,StyleSheet} from 'react-native'
import Cover from './Cover'

const CoverList = ({images}) => {
    const renderCover = ({item}) => {
        return (
            <TouchableOpacity>
                <Cover small image ={item.imageSrc}/>

            </TouchableOpacity>
        )
    }
    return(
        <FlatList
        contentContainerStyle={styles.padding}
        data={images}
        horizontal={true}
        renderItem={item => renderCover(item)}
        keyExtractor= {item => item.id}/>


    
    )
}

const styles = StyleSheet.create({
    padding:{
        paddingHorizontal:25,
    }


})

export default CoverList ;