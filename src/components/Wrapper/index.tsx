import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Tabs from '../Tabs';
import { ReactNode } from 'react';

interface WrapperContainerProps {
  children?: ReactNode;
  header?: ReactNode;
}

export const WrapperContainer = ({ children, header }: WrapperContainerProps) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#0D3A4E', '#0374A8', '#82AEC1']}
        style={{ flex: 0.16, flexDirection: 'row' }}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}>
        {header}
      </LinearGradient>
      <View
        style={{
          flex: 0.84,
          borderRadius: 10,
          backgroundColor: 'white',
          top: -8,
          bottom: 0,
        }}>
        {children}
      </View>
    </View>
  );
};
