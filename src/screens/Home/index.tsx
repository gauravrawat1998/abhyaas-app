import { StyleSheet, Text, View } from "react-native";
import { WrapperContainer } from "../../components/Wrapper";

function HomeScreen({ navigation }: any) {
    return (
      <WrapperContainer>
        <View style={styles.sectionContainer}>
          <Text
            onPress={() => {
              navigation.navigate('Drawer');
            }}>
            Navigate
          </Text>
        </View>
      </WrapperContainer>
    );
  }
  export default HomeScreen;
  const styles = StyleSheet.create({
    sectionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  