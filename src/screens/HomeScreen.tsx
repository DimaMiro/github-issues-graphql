import React from 'react';
import {Animated, View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, FlatList} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Query } from 'react-apollo';

import colors from "../shared/utils/colors";
import helpers from "../shared/utils/helpers";
import images from "../shared/utils/images";

import {LIST_ISSUES} from "../shared/queries";
import {GIssue} from "../shared/interfaces/issue.interface";

import IssueRow from "../components/IssueRow";

interface Props {
    navigation: any,
}

class HomeScreen extends React.Component<Props> {
    renderRow = ({item}) => {
        return (<IssueRow issue={item}/>)
    };
    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.headerContainer]}>
                    <Image source={images.logo} style={{width: 175, resizeMode: 'contain'}}/>
                </View>
                <Query query={LIST_ISSUES}>
                    {({ loading, error, data, fetchMore }) => {
                        if (loading) return <ActivityIndicator/>;
                        if (error) return <Text>Error</Text>;
                        const issuesToRender: Array<GIssue> = data.repository.issues.nodes;
                        return (
                            <FlatList
                                style={styles.issuesContainer}
                                data={issuesToRender}
                                renderItem={this.renderRow}
                                keyExtractor={(item, index) => index.toString()}
                                onEndReachedThreshold={1}
                                onEndReached={() => {
                                    fetchMore({
                                        variables: { cursor: data.repository.issues.pageInfo.endCursor },
                                        updateQuery: (previousResult, { fetchMoreResult }) => {
                                            const newEdges = fetchMoreResult.repository.issues.nodes;
                                            const pageInfo = fetchMoreResult.repository.issues.pageInfo;
                                            return newEdges.length
                                                ? {
                                                    repository: {
                                                        __typename: previousResult.repository.__typename,
                                                        issues: {
                                                            __typename: previousResult.repository.issues.__typename,
                                                            nodes: [...previousResult.repository.issues.nodes, ...newEdges],
                                                            pageInfo
                                                        }
                                                    }
                                                }
                                                : previousResult;
                                        }
                                    })
                                }}
                            />
                        )
                    }}
                </Query>
            </View>
        );
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        backgroundColor: colors.darkBgColor,
        width: '100%',
        paddingTop: getStatusBarHeight() + helpers.padding.s,
        paddingBottom: helpers.padding.xl,
        paddingHorizontal: helpers.padding.l,
        overflow: 'hidden'
    },
    issuesContainer: {
        paddingTop: helpers.padding.m,
        paddingHorizontal: helpers.padding.l,
        paddingBottom: helpers.padding.xl,
    }
});
