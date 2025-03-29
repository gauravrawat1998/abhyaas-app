import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { WrapperContainer } from '../../../components/Wrapper';
import CategoryStrip from '../../../components/Category/Strip';
import ScreenHeader from '../../../components/ScreenHeader';

const ViewAll = ({navigation, route}:any) => {
    const {heading} = route?.params
    const renderStrip = ({ item, index }: any) => <CategoryStrip key={item} />;
    const [searchText,setSearchText] = useState('')
    return (
        <WrapperContainer isPadding={0} header={<ScreenHeader 
            headerText={heading}
            navigation={navigation}
            searchText={searchText}
            isDrawer={false}
            onTextChange={(text: string) => setSearchText(text)}
        />}>
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
