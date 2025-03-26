import { StyleSheet, View } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ExamCard from "../../components/ExamCard";

function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.sectionContainer}>
      <Input onChangeText={() => { }} placeholder="Enter Your Mobile Number" />
      <Button
        text="Get Started"
        onPress={() => {
          navigation.navigate('Second');
        }}
      />
      <ExamCard
        topic="National & International Current Events"
        paper="GS Paper- I"
        mode="Easy"
      />
    </View>
  );
}
export default ProfileScreen;
const styles = StyleSheet.create({
    sectionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });