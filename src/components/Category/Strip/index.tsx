import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import images from '../../../contants/images';
import colors from '../../../contants/colors';

const CategoryStrip = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Civil Services</Text>
            <Image source={images.exams} style={styles.image} />
        </TouchableOpacity>
    );
};

export default CategoryStrip;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 0.5,
        borderColor: colors.border,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingLeft: 16,
        paddingRight: 8,
        paddingVertical: 5
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
    },
    image: {
        height: 35,
        width: 35,
    },
});
