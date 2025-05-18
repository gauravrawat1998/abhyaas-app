import { Image, Platform, Pressable, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors, { gradient } from '../../contants/colors';
import { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import images from '../../contants/images';

interface WrapperContainerProps {
  children?: ReactNode;
  header?: ReactNode;
  isBack?: boolean;
  headertext?: String;
  headersubtext?: String;
  isPadding?: number;
  headingflex?: number;
}

export const WrapperContainer = ({
  children,
  header,
  headertext,
  headersubtext,
  isBack = true,
  headingflex = 0.15,
  isPadding = 24,
}: WrapperContainerProps) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={gradient.header}
        style={{ flex: headingflex }}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: Platform.OS == 'ios' ? insets.top : insets.top + 12,
            paddingHorizontal: insets.left
          }}>
          {isBack && (
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                padding: 16,
                paddingVertical: 25,
                height: '100%',
                width: '10%'
              }}>
              <Image source={images.back} style={{ height: 28, width: 28 }} />
            </Pressable>
          )}
          {header ? (
            header
          ) : (
            <View
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 32, color: colors.white }}>
                {headertext}
              </Text>
              {headersubtext && (
                <Text style={{ color: colors.white }}>{headersubtext}</Text>
              )}
            </View>
          )}
        </View>
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
