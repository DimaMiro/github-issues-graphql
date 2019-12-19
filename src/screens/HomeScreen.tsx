import React from 'react';
import {Animated, View, Text, StyleSheet, Image, ScrollView, ActivityIndicator} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { graphql, Query } from 'react-apollo';
import { compose } from "recompose";

import colors from "../shared/utils/colors";
import helpers from "../shared/utils/helpers";
import images from "../shared/utils/images";

import {LIST_ISSUES} from "../shared/queries";

interface Props {
    navigation: any,
    listIssues: any,
}
interface State {
    isLoading: boolean,
    issues: Array<any>
}

class HomeScreen extends React.Component<Props, State> {

    constructor(props){
        super(props);
        this.state = {
            issues: [],
            isLoading: false,
        };
    }
    componentDidMount(): void {
    }

    render(){
        return(
            <View style={styles.container}>
                <Query query={LIST_ISSUES}>
                    {({ loading, error, data }) => {
                        if (loading) return <Text>Fetching</Text>
                        if (error) return <Text>Error</Text>

                        const issuesToRender = data.repository.issues
                        console.log(issuesToRender)
                        return (
                            <Text>DONE</Text>
                        )
                    }}
                </Query>
            </View>
        );
    }
};
export default HomeScreen

// export default compose(
//     graphql(listIssues, { name: "listIssues" }))(HomeScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.darkBgColor,
        width: '100%',
        paddingTop: getStatusBarHeight() + helpers.padding.s,
        paddingBottom: helpers.padding.xl,
        paddingHorizontal: helpers.padding.l,
        overflow: 'hidden'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfoBox: {
        flexDirection: 'row',
        marginTop: helpers.margin.m,
        alignItems: 'center',
    },
    avatarImage: {
        backgroundColor: colors.lightGrey,
        width: 64,
        height: 64,
        resizeMode: 'cover',
        borderRadius: helpers.radius.normal
    },
    collapsedAvatarImage: {
        width: 36,
        height: 36,
        borderRadius: helpers.radius.small,
    },
    collapsedTopContainerInfoBox: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        top: helpers.margin.xs,
    },
    collapsedNameBlock: {
        alignItems: 'baseline',
        flexDirection: 'row',
        marginLeft: helpers.margin.s,
    },
    collapsedUserFullName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: helpers.fonSize.subtitle,
    },
    collapsedUserName: {
        color: '#A7A9AB',
        fontSize: helpers.fonSize.caption,
        marginLeft: helpers.margin.xs,
    },
    userFullName: {
        fontSize: helpers.fonSize.title,
        color: 'white',
        fontWeight: 'bold'
    },
    userName: {
        fontSize: helpers.fonSize.subtitle,
        color: 'white',
        marginTop: helpers.margin.xs
    },
    repoContainer: {
        paddingTop: helpers.padding.m,
        paddingHorizontal: helpers.padding.l,
        paddingBottom: helpers.padding.xl,
    }
});
