import {
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import React from 'react';
import colors from '../../contants/colors';

interface ButtonProps {
    text: string;
    onPress: () => void;
    containerStyles?: ViewStyle;
    btnStyles?: TextStyle;
}

const Button = (props: ButtonProps) => {
    const { text, onPress, containerStyles, btnStyles } = props;
    return (
        <TouchableOpacity
            style={[styles.btnContainer, containerStyles]}
            activeOpacity={0.7}
            onPress={onPress}>
            <Text style={[styles.btnText, btnStyles]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    btnContainer: {
        paddingVertical: 11,
        backgroundColor: colors.green,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: colors.white,
        fontSize: 24,
        fontWeight: '500',
    },
});
