import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { gradient } from '../../../contants/colors';
import { styles } from '../styles';
import images from '../../../contants/images';
import { WrapperContainer } from '../../../components/Wrapper';

const tabs = ['Winnings Breakup', 'Rules & Instructions'];
const dummyResult = [
    {
        rank: '# 1',
        winnings: '₹6,000.00',
    },
    {
        rank: '# 2',
        winnings: '₹1,500.00',
    },
    {
        rank: '# 3',
        winnings: '₹1,500.00',
    },
    {
        rank: '# 4 - 13',
        winnings: '₹45.00',
    },
];
const dummyRules = [
    'There will be 5 questions in this quiz.',
    'You will have 1 minute (60 seconds) to answer each question.',
    'Once you select an answer, it cannot be changed.',
    'No points will be deducted for wrong answers.',
    'The quiz will automatically end once the time is up.',
    'Please ensure you have enough cash balance to take the test.',
    'Winning Prizes will be transferred within 24 hrs as withdrawable balance.',
];

const TestHeader = ({ paper }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{paper}</Text>
            <View style={styles.timerContainer}>
                <Text style={styles.timer}>250.0</Text>
                <Image source={images.wallet_h} style={{ width: 24, height: 24 }} />
            </View>
        </View>
    );
};

const TestDetail = ({ navigation, route }: any) => {
    const { params } = route;
    const { paper } = params;
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <WrapperContainer isPadding={0} header={<TestHeader paper={paper} />}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    marginTop: 20,
                }}>
                <TouchableOpacity
                    disabled
                    style={styles.cardContainer}
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate('Question');
                    }}>
                    <View style={styles.cardHeader}>
                        <View style={styles.cardHeaderLeft}>
                            {/* <View style={styles.topicContainer}>
                            <Image source={images.winning} style={styles.winning} />
                            <Text style={styles.topic}>Guaranteed Winning</Text>
                        </View> */}
                            <View style={styles.topicContainer}>
                                <Text style={styles.topic}>Prize Pool</Text>
                                <Text style={styles.topic}>₹10</Text>
                            </View>
                            <View style={styles.cardHeaderRight}>
                                <Text style={styles.topic}>Entry</Text>
                                <Text style={[styles.topic, { textAlign: 'right' }]}>₹5</Text>
                            </View>
                        </View>
                        <View style={styles.paperShadow}>
                            <LinearGradient
                                colors={gradient.postions}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                style={styles.shadow}
                            />
                            <Text style={styles.paperText}>1st ₹10</Text>
                        </View>
                    </View>
                    <View style={styles.cardFooter}>
                        <View style={styles.footerOption}>
                            <Image
                                source={images.no_of_ques}
                                style={{ width: 15, height: 15 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.footerValue}>NoQ: 5</Text>
                        </View>

                        <View style={styles.footerOption}>
                            <Image
                                source={images.winner}
                                style={{ width: 15, height: 15 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.footerValue}>50% Winners</Text>
                        </View>

                        <View style={styles.footerOption}>
                            <Image
                                source={images.player}
                                style={{ width: 15, height: 15 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.footerValue}>2 Players </Text>
                        </View>

                        <View style={styles.footerOption}>
                            <Image
                                source={images.time}
                                style={{ width: 15, height: 15 }}
                                resizeMode="contain"
                            />
                            <Text style={styles.footerValue}>Time: 60 Secs</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ marginVertical: 15 }}>
                    <View
                        style={[styles.feature, { paddingHorizontal: 15, marginBottom: 20 }]}>
                        <View style={styles.feature}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={images.no_of_ques_black}
                                    style={{ width: 12, height: 16 }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View>
                                <Text style={styles.featureLabel}>Number of Questions</Text>
                                <Text style={styles.featureValue}>5</Text>
                            </View>
                        </View>
                        <View style={styles.feature}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={images.durantion_black}
                                    style={{ width: 14, height: 16 }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View>
                                <Text style={styles.featureLabel}>Duration</Text>
                                <Text style={styles.featureValue}>1 min</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.feature, { paddingHorizontal: 15 }]}>
                        <View style={styles.feature}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={images.medium_black}
                                    style={{ width: 12, height: 16 }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View>
                                <Text style={styles.featureLabel}>Medium of Test</Text>
                                <Text style={styles.featureValue}>Hindi</Text>
                            </View>
                        </View>
                        <View style={styles.feature}>
                            <View style={styles.iconContainer}>
                                <Image
                                    source={images.mode_black}
                                    style={{ width: 14, height: 16 }}
                                    resizeMode="contain"
                                />
                            </View>
                            <View>
                                <Text style={styles.featureLabel}>Mode of Questions</Text>
                                <Text style={styles.featureValue}>Easy</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Searching')}>
                    <LinearGradient
                        colors={gradient.button}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={styles.button}>
                        <Text style={styles.text}>Take Seat</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <Text style={styles.timeLimit}>
                    Entries Available by 04:59 PM, Today
                </Text>
                <View style={styles.rulesTabs}>
                    {tabs.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.rulesTab,
                                index == selectedTab && styles.selectedRuleTab,
                            ]}
                            onPress={() => setSelectedTab(index)}>
                            <Text
                                style={[
                                    styles.rulesTabText,
                                    index == selectedTab && styles.selectedRuleTabText,
                                ]}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                {selectedTab == 0 && (
                    <View>
                        <View style={styles.tabsData}>
                            <Text style={styles.tabData}>RANK</Text>
                            <Text style={styles.tabData}>WINNINGS</Text>
                        </View>
                        {dummyResult.map((element, index) => (
                            <View key={index} style={styles.tabsData}>
                                <Text style={styles.tabData}>{element.rank}</Text>
                                <Text style={styles.tabData}>{element.winnings}</Text>
                            </View>
                        ))}
                    </View>
                )}
                {selectedTab == 1 && (
                    <View style={{
                        margin: 20,
                    }}>
                        <Text style={styles.rulesTitle}>
                            Please read the following instructions carefully before the game
                            start.
                        </Text>
                        <View>
                            {dummyRules.map((el, index) => (
                                <Text style={styles.rulesDes}>{index + 1}. {el}</Text>
                            ))}
                        </View>
                    </View>
                )}
            </ScrollView>
        </WrapperContainer>
    );
};

export default TestDetail;
