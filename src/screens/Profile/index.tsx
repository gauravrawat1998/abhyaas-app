import { StyleSheet, View } from 'react-native';
import { WrapperContainer } from '../../components/Wrapper';
import { useState } from 'react';
import ScreenHeader from '../../components/ScreenHeader';

function ProfileScreen({ navigation, route }: any) {
  const [searchText,setSearchText]= useState('')
  return <WrapperContainer isBack={false}
  header={
  <ScreenHeader
  headerText={route?.name}
  navigation={navigation}
  searchText={searchText}
  isDrawer={true}
  onTextChange={(text: string) => setSearchText(text)}
/>}
/>
}
export default ProfileScreen;
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
