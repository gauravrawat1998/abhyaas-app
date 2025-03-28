import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WrapperContainer } from '../../components/Wrapper';
import { categoryData } from '../../contants/data';
import CategoryCard from '../../components/Category/Card';

const AllCategories = () => {
    return (
        <WrapperContainer isPadding={16}>
            <Text style={styles.heading}>Trending</Text>
            <CategoryCard />
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
});
