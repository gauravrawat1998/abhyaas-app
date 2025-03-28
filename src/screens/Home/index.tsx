import { StyleSheet, Text, View, FlatList } from 'react-native';
import { WrapperContainer } from '../../components/Wrapper';
import Tabs from '../../components/Tabs';
import { useState } from 'react';
import { examDummyData } from '../../contants/data';
import SmallChip from '../../components/SmallChip';
import ExamCard from '../../components/ExamCard';

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
      header={
        <Tabs
          selectedTab={selectedTabIndex}
          onTabChange={index => setSelectedTabIndex(index)}
        />
      }
      isBack
      >
      <View style={styles.sectionContainer}>
        <FlatList
          horizontal
          data={examDummyData}
          renderItem={renderChips}
          style={{ marginVertical: 20, paddingHorizontal: 20 }}
        />
        <Text style={styles.heading}>Preliminary Examination</Text>
        <FlatList
          data={new Array(10)}
          renderItem={() => (
            <ExamCard
              topic="National & International Current Events"
              paper="GS Paper- I"
              mode="Easy"
            />
          )}
        />
      </View>
    </WrapperContainer>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  sectionContainer: {
    // flex: 1,
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
});
