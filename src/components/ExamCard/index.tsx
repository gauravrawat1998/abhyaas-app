import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import images from '../../contants/images';
import colors from '../../contants/colors';

interface ExamCardProps {
    topic: string;
    paper: string;
    mode: string;
}

const ExamCard = (props: ExamCardProps) => {
    const { topic, paper, mode } = props;

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
                <View style={styles.cardHeaderLeft}>
                    <View style={styles.topicContainer}>
                        <Text style={styles.topic}>{topic}</Text>
                    </View>
                    <TouchableOpacity style={styles.cardHeaderRight}>
                        <Image style={styles.bellIcon} source={images.bell} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.paperText}>{paper}</Text>
            </View>
            <View style={styles.cardFooter}>
                <View style={styles.footerOption}>
                    <Text style={styles.footerLabel}>Mode of Questions</Text>
                    <Text style={styles.footerValue}>{mode}</Text>
                </View>
                <View style={[styles.footerOption, styles.pipe]}>
                    <Text style={styles.footerLabel}>Number of Questions</Text>
                    <Text style={styles.footerValue}>5 in each Quiz</Text>
                </View>
                <View style={[styles.footerOption, styles.pipe]}>
                    <Text style={styles.footerLabel}>Highest Prize Pool</Text>
                    <Text style={styles.footerValue}>10 Lakhs</Text>
                </View>
                <View style={[styles.footerOption, styles.pipe]}>
                    <Text style={styles.footerLabel}>Timer</Text>
                    <Text style={styles.footerValue}>1 Min for each Quiz</Text>
                </View>
            </View>
        </View>
    );
};

export default ExamCard;

const styles = StyleSheet.create({
    cardContainer: {
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
        marginHorizontal: 16,
        marginTop: 23,
    },
    cardHeader: {
    },
    cardHeaderLeft: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10
    },
    topicContainer: {
        flex: 0.9,
        paddingLeft: 10,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 80,
        backgroundColor: colors.white,
    },
    cardHeaderRight: {
        paddingRight: 10
    },
    topic: {
        fontSize: 10,
        fontWeight: '600',
        marginTop: 4
    },
    paperText: {
        borderWidth: 1,
        borderColor: colors.red,
        borderRadius: 35,
        width: 100,
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        alignSelf: 'center',
    },
    bellIcon: {
        width: 22,
        height: 22
    },
    cardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 4,
        backgroundColor: colors.blue,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingVertical: 5,
        marginTop: 10
    },
    footerLabel: {
        fontSize: 8,
        fontWeight: '600',
        color: colors.grey,

    },
    footerValue: {
        fontSize: 8,
        fontWeight: '600',
        color: colors.black
    },
    footerOption: {
        alignItems: "center"
    },
    pipe: {
        borderLeftWidth: 1,
        paddingLeft: 5,
        borderColor: colors.dark_blue
    }
});
