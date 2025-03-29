import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WrapperContainer } from '../../../components/Wrapper';
import CategoryStrip from '../../../components/Category/Strip';

const ViewAll = () => {
    const renderStrip = ({ item, index }: any) => <CategoryStrip key={item} />;

    return (
        <WrapperContainer isPadding={0}>
            <FlatList
                data={new Array(20)}
                renderItem={renderStrip}
                contentContainerStyle={{ marginHorizontal: 12, marginTop: 20 }}
                showsVerticalScrollIndicator={false}
            />
        </WrapperContainer>
    );
};

export default ViewAll;

const styles = StyleSheet.create({});
