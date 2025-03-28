import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { tabsData } from '../../contants/data';
import BigChip from '../BigChip';

interface TabsProps {
    selectedTab: number;
    onTabChange: (index: number) => void;
}

const Tabs = (props: TabsProps) => {
    const { selectedTab, onTabChange } = props;
    return (
        <View style={styles.container}>
            {tabsData.map((item, index) => (
                <BigChip
                    onPress={() => onTabChange(index)}
                    isSelected={selectedTab == index}
                    item={item}
                    key={index}
                />
            ))}
        </View>
    );
};

export default Tabs;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 13,
        alignSelf: "flex-end",
        marginBottom: 20,
        width: Dimensions.get("screen").width
    },
});
