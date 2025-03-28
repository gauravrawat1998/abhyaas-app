import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WrapperContainer } from '../../components/Wrapper';
import { categoryData } from '../../contants/data';
import CategoryCard from '../../components/Category/Card';

const AllCategories = () => {
    return (
        <WrapperContainer isPadding={16}>
            <Text style={styles.heading}>Trending</Text>
            <View style={styles.row}>
                {categoryData.trending.map((item, index) => (
                    <CategoryCard key={item + index} item={item} />
                ))}
            </View>
        </WrapperContainer>
    );
};

export default AllCategories;

const styles = StyleSheet.create({
    heading: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
