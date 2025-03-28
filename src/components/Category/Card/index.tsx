import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../../../contants/images'

const CategoryCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>CategoryCard</Text>
            <Image source={images.exams} style={styles.image} />
        </View>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {},
    image: {},
    text: {}
})