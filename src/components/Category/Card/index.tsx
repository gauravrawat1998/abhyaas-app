import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import images from '../../../contants/images';
import colors from '../../../contants/colors';
import LinearGradient from 'react-native-linear-gradient';

interface CategoryCardProps {
    item: any
}

const CategoryCard = (props: CategoryCardProps) => {
    const { item } = props
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            {/* <LinearGradient
                colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.2)", "transparent"]}
                style={styles.shadowTop}
            />
            <LinearGradient
                colors={["rgba(0,0,0,0.1)", "transparent"]}
                style={styles.shadowLeft}
            />
            <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.1)"]}
                style={styles.shadowRight}
            /> */}
            <Text style={styles.text}>{item}</Text>
            <Image source={images.exams} style={styles.image} />
        </TouchableOpacity>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width / 3 - 24,
        height: 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: colors.white,
        padding: 5,
        borderRadius: 8,
        justifyContent: "space-between"
        // overflow: "hidden",
        // position: "relative",
    },
    image: {
        width: 45,
        height: 45,
        alignSelf: "flex-end",
    },
    text: {
        fontSize: 12,
        color: colors.grey,
        fontWeight: '700',
        marginBottom: 15
    },
    shadowTop: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
    },
    shadowLeft: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: 5,
    },
    shadowRight: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: 5,
    },
});
