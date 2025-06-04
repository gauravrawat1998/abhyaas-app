import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import colors from '../../contants/colors';

interface SmallChipProps {
    image: ImageSourcePropType;
    label: string;
    isSelected: boolean;
    setSelectedExamIndex: () => void;
}

const SmallChip = (props: SmallChipProps) => {
    const { image, label, isSelected, setSelectedExamIndex } = props;
    return (
        <TouchableOpacity
            style={[styles.container, isSelected ? styles.selected : {}]}
            onPress={setSelectedExamIndex}>
            <Image source={image} style={styles.image} />
            <Text style={[styles.label, isSelected ? styles.selectedLabel : {}]}>{label}</Text>
        </TouchableOpacity>
    );
};

export default SmallChip;

const styles = StyleSheet.create({
    container: {
        height: 30,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 35,
        paddingVertical: 5,
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 25,
        marginRight: 12,
    },
    image: {
        width: 23,
        height: 23,
        position: 'absolute',
        left: 6,
    },
    label: {
        fontSize: 13,
        marginLeft:8,
        fontWeight: '700',
    },
    selectedLabel: {
        color: colors.chip,
    },
    selected: {
        borderColor: colors.chip,
    },
});
