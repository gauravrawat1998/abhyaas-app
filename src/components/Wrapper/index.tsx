import { Image, Pressable, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import colors, { gradient } from "../../contants/colors";
import { ReactNode } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import images from "../../contants/images";

interface WrapperContainerProps {
  children?: ReactNode;
  header?: ReactNode;
  isBack?: boolean;
  headertext?: String;
  headersubtext?: String;
}

export const WrapperContainer = ({ children, header, headertext, headersubtext,  isBack= true }: WrapperContainerProps) => {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={gradient.header}
        style={{ flex: 0.16 }}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={{ flexDirection: 'row', alignItems:'center', paddingTop:insets.top}} >
        {isBack && <Pressable onPress={()=>{navigation.goBack()}} style={{ paddingTop:22, paddingHorizontal:16, position:'absolute', bottom:0}}>
        <Image source={images.back} style={{height:28, width:28}} />
        </Pressable>}
        {header ?  header : 
        <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:32,color:colors.white}}>{headertext}</Text>
        {headersubtext &&<Text style={{color:colors.white}}>{headersubtext}</Text>}
    </View>}
        </View>
      </LinearGradient>
      <View
        style={{
          flex: 0.84,
          borderRadius: 12,
          backgroundColor: 'white',
          top:-8,
          bottom: 0,
          padding:24
        }}>
        {children}
      </View>
    </View>
  );
};
