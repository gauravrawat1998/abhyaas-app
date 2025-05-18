import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import images from '../../../contants/images';
import colors from '../../../contants/colors';

const Searching = ({ navigation }: any) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Question")
        }, 1000);
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Searching Competitors</Text>
            <View style={styles.avatarSection}>
                <Image source={images.searching} style={styles.avatar} />
                <Text style={styles.searchingText}>Searching...</Text>
                <Image source={images.searching} style={styles.avatar} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.chip,
        alignItems: 'center',
        paddingTop: 100,
    },
    header: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
    avatarSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 50,
        elevation: 5,
        marginVertical: 100,
    },
    searchingText: {
        transform: [{ rotate: '90deg' }],
        fontSize: 28,
        color: colors.white,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});

export default Searching;
