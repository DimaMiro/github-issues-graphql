import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from "../shared/utils/colors";
import helpers from "../shared/utils/helpers";
import images from "../shared/utils/images";
import {GIssue} from "../shared/interfaces/issue.interface";
import { format } from 'date-fns'


interface Props {
    issue?: GIssue
}

const IssueRow = (props: Props) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={props.issue.closed ? images.closedIssue : images.openIssue}/>
            <View style={{flex: 1, marginLeft: helpers.margin.s}}>
                <Text style={styles.title}>{props.issue.title}</Text>
                <Text style={styles.caption}>{props.issue.author.login} updated at {format(new Date(props.issue.updatedAt), 'd MMM yyyy HH:ii')}</Text>
            </View>
        </View>
    )
};


export default IssueRow

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
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
