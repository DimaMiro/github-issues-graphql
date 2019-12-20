import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from "../shared/utils/colors";
import helpers from "../shared/utils/helpers";
import {GIssue} from "../shared/interfaces/issue.interface";


interface Props {
    issue: GIssue
}

const IssueRow = (props: Props) => {
    return (
        <View style={styles.cardContainer}>
            {/*<View style={{position: 'relative', flexDirection: 'row', width:'100%', justifyContent: 'space-between'}}>*/}
            {/*    <Text style={{maxWidth:'70%', color: colors.darkColor, fontSize: helpers.fonSize.p, fontWeight: '500'}} numberOfLines={1}>{props.issue.title}</Text>*/}
            {/*    <Text style={{marginLeft: helpers.margin.xs, color: colors.primaryOnLightTextColor, fontSize: helpers.fonSize.caption, fontWeight: '500'}} numberOfLines={1}>{props.issue.id.substring(0,7)}</Text>*/}
            {/*</View>*/}
            <Text style={styles.title}>{props.issue.title}</Text>
            <Text style={styles.caption}>{props.issue.author.login} updated at {props.issue.updatedAt}</Text>
        </View>
    )
};


export default IssueRow

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        borderRadius: helpers.radius.normal,
        borderWidth: 1,
        borderColor: colors.borderColor,
        padding: helpers.padding.m,
        marginBottom: helpers.margin.s,
    },
    title: {
        color: colors.darkColor,
        fontSize: helpers.fonSize.p,
        fontWeight: '500'
    },
    caption: {
        color: colors.secondaryOnLightTextColor,
        fontSize: helpers.fonSize.caption,
        fontWeight: '400',
        marginTop: helpers.margin.xs
    },
});
