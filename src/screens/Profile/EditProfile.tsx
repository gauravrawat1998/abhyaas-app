import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { WrapperContainer } from '../../components/Wrapper';
import { useRef, useState } from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import colors from '../../contants/colors';
import ModalBox from '../../components/Modal';
import images from '../../contants/images';
import Button from '../../components/Button';

const options = ['Post Graduation', 'Graduation', '12th', '10th'];

const ProfileInput = ({ label, value, field, editable, onChangeText }: any) => {
    return (
        <View style={styles.inputContainer}>
            <Text>{label}</Text>
            <TextInput
                value={value}
                style={styles.input}
                editable={editable}
                onChangeText={text => onChangeText(field, text)}
                keyboardType='default'
            />
        </View>
    );
};

function EditProfileScreen({ navigation, route }: any) {
    const modalref: any = useRef(null);
    const [isTextDisabled, setIsTextDisabled] = useState(true);
    const [selectedHigherEducation, setSelectedHigherEducation] = useState<any>();
    const [formValues, setFormValues] = useState<any>({
        name: '',
        email: '',
        number: '',
        dob: '',
        state: '',
        city: '',
        pin: '',
    });

    const ProfileDropdown = ({ label }: any) => {
        return (
            <View style={styles.inputContainer}>
                <Text>{label}</Text>
                <Pressable
                    disabled={isTextDisabled}
                    style={[styles.input, { justifyContent: 'center' }]}
                    onPress={() => modalref.current.open()}>
                    {<Text>{options[selectedHigherEducation]}</Text>}
                </Pressable>
            </View>
        );
    };

    const saveDataHandler = () => {
        setIsTextDisabled(true);
    };

    const onTextChangeHandler = (key: string, value: string) => {
        setFormValues((prev: any) => ({ ...prev, [key]: value }));
    };

    return (
        <WrapperContainer
            isPadding={0}
            isBack={false}
            header={
                <ScreenHeader
                    headerText={route?.name}
                    navigation={navigation}
                    isDrawer={true}
                />
            }>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        flexGrow: 1,
                        marginTop: 20,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text style={styles.title}>Basic Information</Text>
                        {isTextDisabled ? (
                            <TouchableOpacity onPress={() => setIsTextDisabled(false)}>
                                <Text style={styles.editCta}>Edit</Text>
                            </TouchableOpacity>
                        ) : null}
                    </View>
                    <View style={styles.basicInfoContainer}>
                        <ProfileInput
                            label="Full Name"
                            value={formValues.name}
                            field="name"
                            editable={!isTextDisabled}
                            onChangeText={onTextChangeHandler}
                        />
                        <ProfileInput
                            label="Email Id"
                            field="email"
                            value={formValues.email}
                            editable={!isTextDisabled}
                            onChangeText={onTextChangeHandler}
                        />
                        <ProfileInput
                            label="Mobile Number"
                            field="number"
                            value={formValues.number}
                            editable={!isTextDisabled}
                            onChangeText={onTextChangeHandler}
                        />
                        <ProfileInput
                            label="Date of Birth"
                            field="dob"
                            value={formValues.dob}
                            editable={!isTextDisabled}
                            onChangeText={onTextChangeHandler}
                        />
                        <ProfileInput
                            label="State"
                            field="state"
                            value={formValues.state}
                            editable={!isTextDisabled}
                            onChangeText={onTextChangeHandler}
                        />
                        <ProfileInput
                            label="City"
                            field="city"
                            value={formValues.city}
                            editable={!isTextDisabled}
                            onChangeText={onTextChangeHandler}
                        />
                        <ProfileInput
                            label="Pincode"
                            field="pin"
                            value={formValues.pin}
                            editable={!isTextDisabled}
                            onChangeText={onTextChangeHandler}
                        />
                    </View>
                    <Text style={[styles.title, { marginTop: 20 }]}>
                        Educational Background
                    </Text>
                    <View style={styles.basicInfoContainer}>
                        <ProfileDropdown label="Highest Education" />
                        <ProfileDropdown label="Profession" />
                        <ProfileDropdown label="Field of Study (Optional)" />
                    </View>
                    {!isTextDisabled ? (
                        <Button
                            text="APPLY"
                            containerStyles={styles.btn}
                            onPress={saveDataHandler}
                        />
                    ) : null}
                </ScrollView>
            </KeyboardAvoidingView>
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
                        Select Your Highest Education
                    </Text>
                </View>
                <FlatList
                    data={options}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => {
                                    setSelectedHigherEducation(index);
                                    modalref.current.close();
                                }}>
                                <Text>{item}</Text>
                                {index == selectedHigherEducation ? (
                                    <Image source={images.check} style={styles.check} />
                                ) : null}
                            </TouchableOpacity>
                        );
                    }}
                />
            </ModalBox>
        </WrapperContainer>
    );
}
export default EditProfileScreen;

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: colors.E1E0E0,
        height: 40,
    },
    inputContainer: {
        marginVertical: 10,
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
    modalbox: {
        height: null,
        width: '100%',
        backgroundColor: colors.white,
        padding: 16,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
    },
    close: {
        height: 12,
        width: 12,
    },
    modal_heading: {
        borderBottomWidth: 0.5,
        lineHeight: 35,
        flex: 1,
        textAlign: 'center',
        color: colors.black,
    },
    refer_code: {
        fontSize: 20,
        fontWeight: '800',
    },
    btn: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: 20,
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
    editCta: {
        color: colors.I86B91,
        fontWeight: '700',
        fontSize: 20,
    },
});
