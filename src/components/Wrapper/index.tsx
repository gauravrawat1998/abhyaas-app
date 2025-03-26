import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const WrapperContainer = ({ children }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#0D3A4E', '#0374A8', '#82AEC1']}
        style={{ flex: 0.16, flexDirection: 'row' }}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}>
        </LinearGradient>
      <View
        style={{
          flex: 0.84,
          borderRadius: 24,
          backgroundColor: 'white',
          top: -16,
          bottom: 0,
        }}>
        {children}
      </View>
    </View>
  );
};