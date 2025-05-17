import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { WrapperContainer } from '../../components/Wrapper';
import colors from '../../contants/colors';
import images from '../../contants/images';

const optionsName = ['A', 'B', 'C', 'D'];

const questionData = [
    {
        question: 'हिंदी भाषा की उत्पत्ति कहाँ से हुई है?',
        options: ['इंग्लैंड', 'फ्रांस', 'भारत', 'अफ़ग़ानिस्तान'],
    },
    {
        question: 'हिंदी की किस बोली को राष्ट्रीय भाषा का दर्जा प्राप्त है',
        options: ['अवधी', 'भोजपुरी', 'खड़ी बोली', 'ब्रज'],
    },
    {
        question: 'हिंदी में कुल कितने स्वर होते हैं?',
        options: ['10', '11', '12', '15'],
    },
    {
        question: 'हिंदी भाषा में कौन सा लिपि प्रयोग की जाती है?',
        options: ['देवनागरी', 'उर्दू', 'रोमन', 'तेलुगु'],
    },
    {
        question: 'हिंदी भाषा के कितने व्यंजन होते हैं?',
        options: ['13', '23', '33', '43'],
    },
];

const TestHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>हिंदी भाषा का परिचय</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={images.timer} style={{ width: 20, height: 23 }} />
                <View style={styles.timerContainer}>
                    <Text style={styles.timer}>-0:12</Text>
                </View>
            </View>
        </View>
    );
};

const Question = ({ navigation }: any) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextQuestion = () => {
        if (questionData[currentQuestionIndex + 1]) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            navigation.goBack();
        }
    };

    return (
        <WrapperContainer isBack={false} isPadding={0} header={<TestHeader />}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    flexGrow: 1,
                    marginTop: 20,
                }}>
                <View style={styles.badge}>
                    <Text>Questions Type: Multiple Type</Text>
                </View>
                <Text>Question - {currentQuestionIndex + 1}</Text>
                <Text style={styles.question}>
                    {questionData[currentQuestionIndex].question}
                </Text>
                {questionData[currentQuestionIndex].options.map(
                    (option: string, index: number) => (
                        <TouchableOpacity
                            style={styles.option}
                            onPress={handleNextQuestion}
                            key={option}>
                            <View style={styles.optionNumber}>
                                <Text style={styles.optionNumberText}>
                                    {optionsName[index]}
                                </Text>
                            </View>
                            <Text style={styles.optionValue}>{option}</Text>
                        </TouchableOpacity>
                    ),
                )}
            </ScrollView>
        </WrapperContainer>
    );
};

export default Question;

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: '800',
        color: colors.white,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 25,
        flex: 1,
        overflow: 'hidden',
        justifyContent: 'space-between',
    },
    timerContainer: {
        height: 23,
        backgroundColor: colors.white,
        borderRadius: 35,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    timer: {
        color: colors.red,
        fontSize: 12,
        fontWeight: '700',
    },
    badge: {
        backgroundColor: colors.F3F3F3,
        padding: 10,
        borderRadius: 10,
        marginBottom: 30,
    },
    option: {
        flexDirection: 'row',
        backgroundColor: colors.F0FAFF,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    optionValue: {
        fontWeight: '500',
        marginLeft: 50,
    },
    optionNumber: {
        width: 25,
        height: 25,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    optionNumberText: {
        fontWeight: '500',
    },
    question: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 10,
    },
});
