import { StyleSheet, View } from 'react-native';
import { WrapperContainer } from '../../components/Wrapper';

function ProfileScreen({ navigation }: any) {
  return <WrapperContainer isBack={false}/>
}
export default ProfileScreen;
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
