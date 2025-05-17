import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import images from '../../contants/images';
import colors from '../../contants/colors';
import LinearGradient from 'react-native-linear-gradient';

interface ExamCardProps {
    topic: string;
    paper: string;
    mode: string;
    onPress?: () => {}
}

const ExamCard = (props: ExamCardProps) => {
    const { topic, paper, mode, onPress } = props;

    return (
        <TouchableOpacity style={styles.cardContainer} activeOpacity={0.5} onPress={onPress}>
            <View style={styles.cardHeader}>
                <View style={styles.cardHeaderLeft}>
                    <View style={styles.topicContainer}>
                        <LinearGradient
                            colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.1)', 'transparent']}
                            style={styles.shadow}
                        />
                        <Text style={styles.topic}>{topic}</Text>
                    </View>
                    <TouchableOpacity style={styles.cardHeaderRight}>
                        <Image style={styles.bellIcon} source={images.bell} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                <View style={styles.paperShadow}>
                    <Text style={styles.paperText}>{paper}</Text>
                </View>
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
        </TouchableOpacity>
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
        marginBottom: 20,
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 20,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 80,
    },
    cardHeader: {
    },
    cardHeaderLeft: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10
    },
    topicContainer: {
        flex: 0.95,
        paddingLeft: 10,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 80,
        backgroundColor: colors.white,
    },
    cardHeaderRight: {
        paddingRight: 10,
        marginTop: 5
    },
    topic: {
        fontSize: 10,
        fontWeight: '600',
        marginTop: 4
    },
    paperShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        elevation: 24,
        backgroundColor: colors.white,
        width: 100,
        borderWidth: 1,
        borderColor: colors.red,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        alignSelf: "center"
    },
    paperText: {
        fontSize: 14,
        fontWeight: '700',
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
        marginTop: 15
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
