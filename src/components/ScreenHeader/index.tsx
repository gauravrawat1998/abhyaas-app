import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import React from 'react';
import images from '../../contants/images';
import colors from '../../contants/colors';

interface ScreenHeaderProps {
    navigation: any;
    searchText: string;
    onTextChange: (text: string) => void;
    headerText: string
}

const ScreenHeader = (props: ScreenHeaderProps) => {
    const { navigation, headerText } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{headerText}</Text>
            <View style={styles.inputContainer}>
                <Image source={images.bottom_search} style={styles.searchIcon} />
                <TextInput
                    placeholder="Search"
                    style={styles.input}
                    placeholderTextColor={colors.border}
                />
            </View>
            <Pressable
                onPress={() => {
                    navigation.openDrawer();
                }}>
                <Image source={images.menu} style={{ height: 25, width: 25 }} />
            </Pressable>
        </View>
    );
};

export default ScreenHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    heading: {
        fontSize: 20,
        fontWeight: '800',
        color: colors.white,
    },
    inputContainer: {
        flex: 1,
        borderRadius: 50,
        backgroundColor: colors.white,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        fontSize: 12,
        flex: 1,
        fontWeight: "500"
    },
    searchIcon: {
        height: 14,
        width: 14,
        marginRight: 5
    }
});
