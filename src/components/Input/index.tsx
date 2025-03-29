import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import colors from '../../contants/colors';

interface InputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChangeText: (text: string) => void;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntry?: boolean;
    error?: string;
    style?: object;
    icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    keyboardType = 'default',
    secureTextEntry = false,
    error,
    style,
    icon,
    ...props
}) => {
    return (
        <View >
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>
                {icon && <View style={styles.icon}>{icon}</View>}
                <TextInput
                    style={[styles.input, error && styles.errorInput, style]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    {...props}
                />
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: colors.black,
        borderRadius: 6,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 10,
        fontSize: 15,
        color:colors.black
    },
    errorInput: {
        borderColor: colors.red,
    },
    errorText: {
        color: colors.red,
        fontSize: 12,
        marginTop: 4,
    },
});

export default Input;