import React from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator, FlatList} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Query } from 'react-apollo';

import colors from "../shared/utils/colors";
import helpers from "../shared/utils/helpers";
import images from "../shared/utils/images";

import {LIST_ISSUES} from "../shared/queries";
import {GIssue} from "../shared/interfaces/issue.interface";

import IssueRow from "../components/IssueRow";
import {GUserData} from "../shared/interfaces/userData.interface";

interface Props {
    navigation: any,
}
interface State {
    page: number,
    userData: GUserData
}

class HomeScreen extends React.Component<Props, State> {
    constructor(props){
        super(props);
        this.state =  {
            page: 1,
            userData: {
                username: '',
                repo: ''
            }
        }
    }
    componentDidMount(): void {
        this.setState({
            userData: {
                username: this.props.navigation.getParam('values').username,
                repo: this.props.navigation.getParam('values').repo
            }
        });
    }

    renderRow = ({item}) => {
        return (<IssueRow issue={item} key={item.key}/>)
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.headerContainer]}>
                    <Image source={images.logo} style={{width: 175, resizeMode: 'contain'}}/>
                    <Text style={{color: 'white', fontSize: helpers.fonSize.p}}>Page: {this.state.page}</Text>
                </View>
                <Query query={LIST_ISSUES} variables={this.state.userData.username !== '' ? {username: this.state.userData.username, repo: this.state.userData.repo} : {}}>
                    {({ loading, error, data, fetchMore }) => {
                        if (loading) return <ActivityIndicator/>;
                        if (error) return <Text>Error</Text>;
                        const issuesToRender: Array<GIssue> = (data.repository.issues.nodes).reverse();
                        return (
                            <FlatList
                                style={styles.issuesContainer}
                                data={issuesToRender}
                                renderItem={this.renderRow}
                                keyExtractor={(item, index) => index.toString()}
                                onEndReachedThreshold={1}
                                removeClippedSubviews={true}
                                onEndReached={() => {
                                    fetchMore({
                                        variables: { cursor: data.repository.issues.pageInfo.startCursor },
                                        updateQuery: (previousResult, { fetchMoreResult }) => {
                                            this.setState((prevState) => ({
                                                page: prevState.page + 1
                                            }));
                                            const newNodes = (fetchMoreResult.repository.issues.nodes);
                                            const pageInfo = fetchMoreResult.repository.issues.pageInfo;
                                            return newNodes.length
                                                ? {
                                                    repository: {
                                                        __typename: previousResult.repository.__typename,
                                                        issues: {
                                                            __typename: previousResult.repository.issues.__typename,
                                                            nodes: [...newNodes, ...previousResult.repository.issues.nodes],
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
