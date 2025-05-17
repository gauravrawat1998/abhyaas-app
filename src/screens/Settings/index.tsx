import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { WrapperContainer } from '../../components/Wrapper';
import ScreenHeader from '../../components/ScreenHeader';
import colors from '../../contants/colors';
import images from '../../contants/images';
import ModalBox from '../../components/Modal';
import Button from '../../components/Button';

const Settings = ({ navigation, route }: any) => {
    const modalref: any = useRef(null);
    const logoutModalRef: any = useRef(null);
    const [smsNotification, setSmsNotification] = useState(false);
    const [emailNotification, setEmailNotification] = useState(false);
    const [rankUpNotification, setRankUpNotification] = useState(false);
    const [soundNotification, setSoundNotification] = useState(false);
    const [vibrationNotification, setVibrationNotification] = useState(false);
    const [previousQuizNotification, setPreviousQuizNotification] =
        useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<
        'English' | 'Hindi' | any
    >('English');
    const [currentLanguage, setCurrentLanguage] = useState('English');

    return (
        <WrapperContainer
            isPadding={0}
            isBack={false}
            header={
                <ScreenHeader
                    headerText={'Setting & Permissions'}
                    navigation={navigation}
                    isDrawer={true}
                />
            }>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    flexGrow: 1,
                    marginTop: 20,
                }}>
                <Text style={styles.title}>Permissions</Text>
                <View style={styles.basicInfoContainer}>
                    <View style={styles.flex}>
                        <Text style={styles.label}>SMS Notifications</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setSmsNotification(!smsNotification)}
                            value={smsNotification}
                        />
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.label}>Email Alerts</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setEmailNotification(!emailNotification)}
                            value={emailNotification}
                        />
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.label}>Show My Rank Publicly</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setRankUpNotification(!rankUpNotification)}
                            value={rankUpNotification}
                        />
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.label}>Allow Sound Effects</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setSoundNotification(!soundNotification)}
                            value={soundNotification}
                        />
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.label}>Enable Vibration Alerts</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() =>
                                setVibrationNotification(!vibrationNotification)
                            }
                            value={vibrationNotification}
                        />
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.label}>Show My Previous Quizzes</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() =>
                                setPreviousQuizNotification(!previousQuizNotification)
                            }
                            value={previousQuizNotification}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.basicInfoContainer}
                    onPress={() => modalref.current.open()}>
                    <View style={[styles.flex, { borderBottomWidth: 0 }]}>
                        <View>
                            <Text style={styles.label}>App Language</Text>
                            <Text style={{ fontSize: 12, fontWeight: '500' }}>
                                {currentLanguage}
                            </Text>
                        </View>
                        <Image source={images.arrowRight} style={{ width: 25, height: 25 }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.basicInfoContainer}
                    onPress={() => logoutModalRef.current.open()}>
                    <View style={[styles.flex, { borderBottomWidth: 0 }]}>
                        <Text style={styles.label}>Logout</Text>
                        <Image source={images.logout} style={{ width: 25, height: 25 }} resizeMode='cover' />
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={[styles.flex, styles.footer]}>
                <Text style={styles.footerText}>Latest Update</Text>
                <Text style={styles.footerText}>Check</Text>
            </TouchableOpacity>
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
                        Change Language
                    </Text>
                </View>
                <FlatList
                    data={['English', 'Hindi']}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                key={item}
                                style={styles.option}
                                onPress={() => {
                                    setSelectedLanguage(item);
                                }}>
                                <Text>{item}</Text>
                                {item === selectedLanguage ? (
                                    <Image source={images.check} style={styles.check} />
                                ) : null}
                            </TouchableOpacity>
                        );
                    }}
                />
                <Button
                    text="Apply"
                    containerStyles={styles.btn}
                    onPress={() => {
                        setCurrentLanguage(selectedLanguage);
                        modalref.current.close();
                    }}
                />
            </ModalBox>
            <ModalBox
                ref={logoutModalRef}
                style={styles.modalbox}
                coverScreen
                position={'bottom'}>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Pressable
                        onPress={() => {
                            logoutModalRef.current.close();
                        }}
                        style={{ padding: 10 }}>
                        <Image source={images.cross} style={styles.close} />
                    </Pressable>
                    <Text style={[styles.modal_heading, styles.refer_code]}>
                        Are you sure you want to logout?
                    </Text>
                </View>
                <Button
                    text="Logout"
                    containerStyles={styles.btn}
                    onPress={() => {
                        logoutModalRef.current.close();
                    }}
                />
            </ModalBox>
        </WrapperContainer>
    );
};

export default Settings;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',
    },
    basicInfoContainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderRadius: 8,
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.E1E0E0,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
    },
    modalbox: {
        height: null,
        width: '100%',
        backgroundColor: colors.white,
        padding: 16,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
    },
    modal_heading: {
        borderBottomWidth: 0.5,
        lineHeight: 35,
        flex: 1,
        textAlign: 'center',
        color: colors.black,
    },
    close: {
        height: 12,
        width: 12,
    },
    refer_code: {
        fontSize: 20,
        fontWeight: '800',
    },
    option: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    check: {
        width: 18,
        height: 18,
    },
    btn: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: 20,
    },
    footer: {
        paddingHorizontal: 20,
        backgroundColor: colors.C1E5F5,
        borderWidth: 1,
        borderColor: colors.dark_blue,
    },
    footerText: {
        color: colors.I86B91,
        fontWeight: "500"
    }
});
