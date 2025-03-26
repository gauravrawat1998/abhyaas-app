import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../../contants/colors';

interface BigChipProps {
    item: any;
    isSelected: boolean;
    onPress: () => void;
}

const BigChip = (prop: BigChipProps) => {
    const { item, isSelected, onPress } = prop;
    return (

        <TouchableOpacity
            style={[styles.chipContainer, isSelected ? styles.selected : {}]}
            onPress={onPress}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.label, isSelected ? styles.textSelected : {}]}>
                {item.label}
            </Text>
        </TouchableOpacity>
    );
};

export default BigChip;

const styles = StyleSheet.create({
    chipContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        borderRadius: 35,
        padding: 5,
        alignItems: 'center',
        paddingRight: 15,
    },
    image: {
        width: 35,
        height: 35,
        marginRight: 10,
    },
    selected: {
        backgroundColor: colors.chip,
    },
    label: {
        color: colors.black,
        fontWeight: '700',
    },
    textSelected: {
        color: colors.white,
    },
});
