import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { WrapperContainer } from '../../components/Wrapper';
import { categoryData } from '../../contants/data';
import CategoryCard from '../../components/Category/Card';

const AllCategories = ({ navigation }: any) => {
    return (
        <WrapperContainer isPadding={0}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16 }}>
                <View style={[styles.container, { marginTop: 16 }]}>
                    <Text style={[styles.heading, styles.margin]}>Trending</Text>
                    <View style={styles.row}>
                        {categoryData.trending.map((item, index) => (
                            <CategoryCard key={item + index} item={item} />
                        ))}
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={[styles.heading, styles.margin]}>Most Played</Text>
                    <View style={styles.row}>
                        {categoryData.most_played.map((item, index) => (
                            <CategoryCard key={item + index} item={item} />
                        ))}
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={[styles.row, styles.margin, { alignItems: "center" }]}>
                        <Text style={[styles.heading]}>Explore By Exams</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("ViewAll")}>
                            <Text style={styles.viewAll}>{"View all >"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        {categoryData.explore_by_exams.map((item, index) => (
                            <CategoryCard key={item + index} item={item} />
                        ))}
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={[styles.row, styles.margin, { alignItems: "center" }]}>
                        <Text style={styles.heading}>Explore By General Subjects</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAll}>{"View all >"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        {categoryData.explore_by_subjects.map((item, index) => (
                            <CategoryCard key={item + index} item={item} />
                        ))}
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={[styles.row, styles.margin, { alignItems: "center" }]}>
                        <Text style={styles.heading}>Explore By Topics</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAll}>{"View all >"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        {categoryData.explore_by_topics.map((item, index) => (
                            <CategoryCard key={item + index} item={item} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </WrapperContainer>
    );
};

export default AllCategories;

const styles = StyleSheet.create({
    heading: {
        fontSize: 16,
        fontWeight: '700',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        marginBottom: 20,
    },
    viewAll: {
        fontSize: 12,
    },
    margin: {
        marginBottom: 15,
    }
});
