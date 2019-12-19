import React from 'react';
import {Animated, View, Text, StyleSheet, Image, ScrollView, ActivityIndicator} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import colors from "../shared/utils/colors";
import helpers from "../shared/utils/helpers";
import images from "../shared/utils/images";


interface Props {
    navigation: any,
}
interface State {
    isLoading: boolean,
}

class HomeScreen extends React.Component<Props, State> {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        };
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>HomeScreen</Text>
            </View>
        );
    }
};
export default HomeScreen;

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
