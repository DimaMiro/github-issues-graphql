import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ActivityIndicator, View} from 'react-native';
import colors from "../shared/utils/colors";
import helpers from "../shared/utils/helpers";

const PrimaryButton = (props) => {
    return (
        <TouchableOpacity
            style={props.isLoading ?
                [styles.primaryButton, props.additionalStyle, styles.inactive]
                : [styles.primaryButton, props.additionalStyle]}
            onPress={props.onPressAction}>
            {props.isLoading ?
                <View style={styles.loading}>
                    <ActivityIndicator/>
                    <Text style={styles.title}> Loading...</Text>
                </View>
                : <Text style={styles.title}>{props.title}</Text>
            }
        </TouchableOpacity>
    )
};

export default PrimaryButton


const styles = StyleSheet.create({
    primaryButton: {
        justifyContent: 'center',
        height: helpers.size.xxl,
        width: '100%',
        backgroundColor: colors.primaryColor,
        borderRadius: helpers.radius.normal,
        paddingHorizontal: helpers.padding.m,
    },
    title: {
        color: 'white',
        fontSize: helpers.fonSize.p,
        textAlign: 'center',
    },
    inactive:  {
        backgroundColor: 'grey',
    },
    loading: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});
