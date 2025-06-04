import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { WrapperContainer } from '../../components/Wrapper';
import colors, { gradient } from '../../contants/colors';
import images from '../../contants/images';
import LinearGradient from 'react-native-linear-gradient';
import ModalBox from '../../components/Modal';
import { styles } from './styles';

const playerOptions = ['2 Players', '3 Players', '5 Players'];
const languageOptions = ['English', 'Hindi'];
const modeOptions = ['Easy', 'Medium', 'Hard', 'Very Hard'];

const testTabs = [
    {
        label: 'Live',
        value: 1,
    },
    {
        label: ' Tournaments',
        value: 2,
    },
    {
        label: 'Challenge Your Friends',
        value: 3,
    },
    {
        label: 'Practice',
        value: 4,
    },
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

const TakeTest = ({ navigation, route }: any) => {
    const { params } = route;
    const { paper } = params;
    const modalref: any = useRef(null);
    const [selectedTab, setSelectedTab] = useState(0);
    const [openModalFor, setOpenModalFor] = useState<
        'player' | 'langauge' | 'mode' | ''
    >('');

    return (
        <WrapperContainer isPadding={0} header={<TestHeader paper={paper} />}>
            <ScrollView horizontal style={{ borderBottomWidth: 1, maxHeight: 50 }}>
                {testTabs.map((item, index) => (
                    <View
                        style={[
                            styles.tab,
                            selectedTab == index && styles.selected,
                            testTabs.length - 1 == index && { marginRight: 15 },
                        ]}
                        key={index}>
                        <TouchableOpacity onPress={() => setSelectedTab(index)}>
                            <Text
                                style={[
                                    styles.tabText,
                                    { color: selectedTab == index ? colors.white : colors.black },
                                ]}>
                                {item.label}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.filerContainer}>
                <TouchableOpacity
                    style={styles.otherFilter}
                    onPress={() => {
                        setOpenModalFor('player');
                        modalref.current.open();
                    }}>
                    <Text style={styles.filterText}>Players: 2</Text>
                    <Image source={images.dropdown} style={{ width: 10, height: 4 }} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.otherFilter}
                    onPress={() => {
                        setOpenModalFor('langauge');
                        modalref.current.open();
                    }}>
                    <Text style={styles.filterText}>Language: Hindi</Text>
                    <Image source={images.dropdown} style={{ width: 10, height: 4 }} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.otherFilter}
                    onPress={() => {
                        setOpenModalFor('mode');
                        modalref.current.open();
                    }}>
                    <Text style={styles.filterText}>Mode: Easy</Text>
                    <Image source={images.dropdown} style={{ width: 10, height: 4 }} />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    marginTop: 20,
                }}>
                {new Array(5).fill(0).map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.cardContainer}
                        activeOpacity={0.5}
                        onPress={() => {
                            navigation.navigate('TestDetail', { paper });
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
                ))}
            </ScrollView>
            <ModalBox
                ref={modalref}
                style={styles.modalbox}
                coverScreen
                position={'bottom'}>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Pressable
                        onPress={() => {
                            modalref.current.close();
                        }}
                        style={{ padding: 10 }}>
                        <Image source={images.cross} style={styles.close} />
                    </Pressable>
                    <Text style={[styles.modal_heading, styles.refer_code]}>
                        {openModalFor == 'langauge'
                            ? 'Change Language'
                            : openModalFor == 'mode'
                                ? 'Change Mode of Questions'
                                : openModalFor == 'player'
                                    ? 'Change Player Numbers'
                                    : ''}
                    </Text>
                </View>
                <FlatList
                    data={
                        openModalFor == 'langauge'
                            ? languageOptions
                            : openModalFor == 'mode'
                                ? modeOptions
                                : openModalFor == 'player'
                                    ? playerOptions
                                    : []
                    }
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => {
                                    modalref.current.close();
                                }}>
                                <Text>{item}</Text>
                                {/* {index == selectedHigherEducation ? (
                                    <Image source={images.check} style={styles.check} />
                                ) : null} */}
                            </TouchableOpacity>
                        );
                    }}
                />
            </ModalBox>
        </WrapperContainer>
    );
};

export default TakeTest;
