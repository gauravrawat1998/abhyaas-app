import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SectionList,
  Pressable,
  Platform,
} from 'react-native';
import { WrapperContainer } from '../../components/Wrapper';
import Tabs from '../../components/Tabs';
import { useState } from 'react';
import { DATA, examDummyData } from '../../contants/data';
import SmallChip from '../../components/SmallChip';
import ExamCard from '../../components/ExamCard';
import images from '../../contants/images';

function HomeScreen({ navigation }: any) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedExamIndex, setSelectedExamIndex] = useState(0);

  const renderChips = (element: any) => {
    const { item, index } = element;
    return (
      <SmallChip
        label={item?.label}
        key={index}
        image={item?.image}
        isSelected={index == selectedExamIndex}
        setSelectedExamIndex={() => setSelectedExamIndex(index)}
      />
    );
  };

  return (
    <WrapperContainer
      isPadding={0}
      headingflex={Platform.OS == 'ios' ? 0.23:0.195}
      header={
        <View>
          <View style={styles.header_cont} >
            <Pressable>
              <Image source={images.profile} style={styles.header_icon} />
            </Pressable>
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
              <Pressable  >
                <Image source={images.notification} style={styles.header_icon} />
              </Pressable>
              <Pressable style={{ paddingHorizontal: 12 }}>
                <Image source={images.wallet} style={styles.header_icon} />
              </Pressable>
              <Pressable onPress={() => { navigation.openDrawer() }} >
                <Image source={images.menu} style={styles.header_icon} />
              </Pressable>
            </View>
          </View>
          <Tabs
            selectedTab={selectedTabIndex}
            onTabChange={index => setSelectedTabIndex(index)}
          />
        </View>
      }
      isBack={false}>
      <View style={styles.sectionContainer}>
        <View>
          <FlatList
            horizontal
            data={examDummyData}
            renderItem={renderChips}
            style={{ marginBottom: 20, paddingHorizontal: 16, marginTop: 20 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ flex: 1 }}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item.topic + index}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.heading}>{title}</Text>
            )}
            renderItem={({ item }) => (
              <ExamCard
                topic={item.topic}
                paper={item.paper}
                mode={item.mode}
                onPress={() => navigation.navigate("TakeTest", {
                  paper: item.paper
                })}
              />
            )}
          />
          {/* <FlatList
            showsVerticalScrollIndicator={false}
            data={new Array(10)}
            ListHeaderComponent={
              <Text style={styles.heading}>Preliminary Examination</Text>
            }
            renderItem={() => (
              <ExamCard
                topic="National & International Current Events"
                paper="GS Paper- I"
                mode="Easy"
              />
            )}
          /> */}
        </View>
      </View>
    </WrapperContainer>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  header_icon: {
    height: 25,
    width: 25
  },
  header_cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12
  }
});
