import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { gradient } from '../../contants/colors';
import { ReactNode } from 'react';

interface WrapperContainerProps {
  children?: ReactNode;
  header?: ReactNode;
  isPadding?: number
}

export const WrapperContainer = ({ children, header, isPadding = 24 }: WrapperContainerProps) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={gradient.header}
        style={{ flex: 0.16, flexDirection: 'row' }}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}>
        {header}
      </LinearGradient>
      <View
        style={{
          flex: 0.84,
          borderRadius: 12,
          backgroundColor: 'white',
          top: -8,
          bottom: 0,
          padding: isPadding,
        }}>
        {children}
      </View>
    </View>
  );
};
