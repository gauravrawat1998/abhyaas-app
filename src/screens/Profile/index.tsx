import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {WrapperContainer} from '../../components/Wrapper';
import {useState} from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import colors from '../../contants/colors';
import ExamCard from '../../components/ExamCard';

function ProfileScreen({navigation, route}: any) {
  const renderCourses = (item: any) => {
    return (
      <View
        style={{
          backgroundColor: colors.white,
          maxWidth: '45%',
          margin: 8,
          borderRadius: 12,
          padding: 10,
        }}>
        <Text style={styles.labels(40, '800', colors.black)}>
          {item?.label}
        </Text>
        <Text style={styles.labels(15, '700', colors.grey)}>
          {item?.subtext}
        </Text>
      </View>
    );
  };

  const RenderCountBox = ({item}: any) => {
    return (
      <View
        style={[styles.flex, styles.center, {backgroundColor: colors.white}]}>
        <Text style={styles.labels(15, '700', colors.grey)}>{item?.label}</Text>
        <Text
          style={styles.labels(
            40,
            '800',
            item?.label == 'Won'
              ? colors.green
              : item?.label == 'Lost'
              ? colors.red
              : colors.black,
          )}>
          {item?.value}
        </Text>
      </View>
    );
  };

  return (
    <WrapperContainer
      isBack={false}
      isPadding={0}
      header={
        <ScreenHeader
          headerText={route?.name}
          navigation={navigation}
          isDrawer={true}
        />
      }>
      <Pressable onPress={()=>{navigation.navigate('EditProfileScreen')}} style={styles.headercont}>
        <View
          style={{
            backgroundColor: colors.profile_blue,
            marginRight: 16,
            alignContent: 'center',
            borderRadius: 42,
          }}>
          <Text
            style={[
              styles.labels(68, '700', colors.profile_darkblue),
              {
                paddingHorizontal: 20,
              },
            ]}>
            A
          </Text>
        </View>
        <View>
          <Text style={styles.labels(20, '700', colors.black)}>
            Geniuses ABC
          </Text>
          <Text
            style={{
              ...styles.labels(14, '600', colors.grey),
              marginBottom: 4,
            }}>
            xyz
          </Text>
          <Text
            style={[
              styles.labels(14, '800', colors.profile_green),
              {
                backgroundColor: colors.profile_green_background,
                padding: 5,
              },
            ]}>
            Genius Grade: A+
          </Text>
        </View>
      </Pressable>
      <View
        style={{
          backgroundColor: colors.profile_blue_background,
          flex: 1,
          justifyContent: 'space-between',
          borderTopStartRadius: 24,
          borderTopEndRadius: 24,
        }}>
        <ScrollView>
          <View>
            <Text
              style={{
                ...styles.labels(40, '800', colors.black),
                textAlign: 'center',
              }}>
              ₹ 1,00,000.00
            </Text>
            <View style={{flexDirection: 'row', padding: 10}}>
              <View style={styles.flex}>
                <Text style={styles.labels(15, '700', colors.black)}>
                  Genius Grade
                </Text>
                <View style={[{width: '70%'},styles.roundCont]}>
                  <Text
                    style={{
                      ...styles.labels(96, '700', colors.white),
                      textAlign: 'center',
                      backgroundColor: colors.profile_darkblue
                    }}>
                    A
                  </Text>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('Performance');
                    }}
                    style={{
                      flexDirection: 'row',
                      backgroundColor: colors.white,
                      paddingHorizontal: 9,
                      paddingVertical: 4,
                    }}>
                    <Text
                      style={[
                        styles.flex,
                        styles.labels(12, '700', colors.black),
                      ]}>
                      Know More
                    </Text>
                    <Text
                      style={styles.labels(
                        12,
                        '700',
                        colors.black,
                      )}>{`>`}</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.flex}>
                <Text style={styles.labels(15, '700', colors.black)}>
                  Analytics
                </Text>
                <View style={[styles.flex, styles.roundCont ]}>
                  <RenderCountBox item={{label: 'Tests', value: '150'}} />
                  <View style={{flexDirection: 'row', marginTop: 1}}>
                    <RenderCountBox item={{label: 'Won', value: '100'}} />
                    <View style={{marginLeft: 1}} />
                    <RenderCountBox item={{label: 'Lost', value: '50'}} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{...styles.labels(15, '700', colors.black), padding: 10}}>
              Courses
            </Text>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[
                  {
                    label: 'UPSC',
                    subtext: 'National and International Affairs',
                  },
                  {label: 'SSC', subtext: 'General English'},
                  {label: 'HINDI', subtext: 'Hindi Literature'},
                ].map(renderCourses)}
              </ScrollView>
            </View>
          </View>
          <View>
            <Text
              style={{...styles.labels(15, '700', colors.black), padding: 10}}>
              Recently Attempted
            </Text>
            <ExamCard
              topic={'Guaranteed Winning'}
              paper={'हिंदी भाषा का'}
              mode={'10,000'}
              onPress={() => navigation.navigate("Question")}
            />
          </View>
        </ScrollView>
      </View>
    </WrapperContainer>
  );
}
export default ProfileScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headercont: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingVertical: 24,
  },
  labels: (size: number, weight: string, color: string) => ({
    fontSize: size,
    fontWeight: weight,
    color: color,
  }),
  roundCont:{
    marginTop: 8,borderRadius:12,overflow:'hidden'}
});
