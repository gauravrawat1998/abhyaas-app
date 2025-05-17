import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {WrapperContainer} from '../../../components/Wrapper';
import ScreenHeader from '../../../components/ScreenHeader';
import {useState} from 'react';
import colors, {gradient} from '../../../contants/colors';
import LinearGradient from 'react-native-linear-gradient';

const DATA = [
  {
    title: 'A+ (Legendary Performer)',
    accuracy: '90%+',
    speed: 'Extremely Fast',
    subtext1: 'Ranks Consistently in Top 10%',
    description: `You're among the elite! You have a deep understanding of topics, solve quickly, and stay consistently at the top!`,
  },
  {
    title: 'A (Advanced Learner)',
    accuracy: '80–89%',
    speed: 'Fast',
    subtext1: 'Ranks Consistently in Top 25%',
    description: `You’re highly skilled and well-practiced. Just a little more focus and you’ll reach the top!`,
  },
  {
    title: 'B+ (Consistent Player)',
    accuracy: '70–79%',
    speed: 'Above Average',
    subtext1: 'Playing Consistently',
    description: `You’re on the right track! Maintain your momentum and keep sharpening your skills.`,
  },
  {
    title: 'B (Learner in Progress)',
    accuracy: '60–69%',
    speed: 'Average',
    subtext1: 'Regular Player',
    description: `Good work so far! You understand the basics, now focus on accuracy and speed to level up.`,
  },
  {
    title: 'C (Beginner)',
    accuracy: 'Below 50%',
    speed: 'Need To Improve',
    subtext1: '',
    description: `You’ve started well. Keep practicing to strengthen your foundation and move forward.`,
  },
  {
    title: 'Initial Player',
    accuracy: '',
    speed: '',
    subtext1: '',
    description: `You're at the beginning of your journey. Practice more quizzes to build confidence and skill.`,
  },
];

const PerformanceScreen = ({navigation}: any) => {
  return (
    <WrapperContainer
      isPadding={0}
      header={
        <ScreenHeader
          headerText={'Performance'}
          navigation={navigation}
          isDrawer={false}
        />
      }>
      <LinearGradient colors={gradient.header} style={styles.center}>
        <View style={[styles.center, styles.headercont]}>
          <Text style={styles.text(84, '600')}>A</Text>
          <Text style={styles.text(16, '600')}>Legendary Performer</Text>
        </View>
      </LinearGradient>
      <View style={styles.browncont}>
        <Text style={styles.text(14, '700')}>
          Accuracy: 75%{`\t`}|{`\t`}Frequently in Top 25%{`\t`}|{`\t`}Speed:
          Fast
        </Text>
      </View>
      <LinearGradient style={{flex: 1}} colors={gradient.header}>
        <Text
          style={{
            ...styles.text(16, '700'),
            padding: 12,
            backgroundColor: colors.blue_background,
          }}>
          How your performance is measured ?
        </Text>
        <ScrollView>
          {DATA?.map((item, index) => (
            <View style={styles.item}>
              <Text
                style={{
                  flex: 0.05,
                  ...styles.text(18, '700'),
                }}>
                {index + 1}.
              </Text>
              <View style={{flex: 0.95}}>
                {item?.title && (
                  <Text style={styles.text(18, '700')}>{item?.title}</Text>
                )}
                {item?.accuracy && (
                  <Text style={styles.text(14, '600')}>
                    Accuracy : {item?.accuracy}
                  </Text>
                )}
                {item?.speed && (
                  <Text style={styles.text(14, '600')}>
                    Speed : {item?.speed}
                  </Text>
                )}
                {item?.subtext1 && (
                  <Text style={styles.text(14, '600')}>{item?.subtext1}</Text>
                )}
                {item?.description && (
                  <Text style={styles.text(14, '400')}>
                    {item?.description}
                  </Text>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </LinearGradient>
    </WrapperContainer>
  );
};
export default PerformanceScreen;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headercont: {
    backgroundColor: colors.dark_green,
    marginVertical: 16,
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.performance_brown,
  },
  text: (size: number, weight: string) => ({
    fontSize: size,
    fontWeight: weight,
    color: colors.white,
  }),
  browncont: {
    backgroundColor: colors.performance_brown,
    padding: 12,
  },
  item: {flexDirection: 'row', marginVertical: 12, paddingHorizontal: 16},
});
