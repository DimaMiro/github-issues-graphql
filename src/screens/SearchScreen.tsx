import React from 'react';
import {View, StyleSheet, Image, Alert, Keyboard} from 'react-native';

import { Formik } from 'formik';

import colors from "../shared/utils/colors";
import helpers from "../shared/utils/helpers";
import images from "../shared/utils/images";

import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

interface Props {
    navigation: any,
}
interface State {
    userInputText: string,
    repoInputText: string,
    isLoading: boolean,
}

class SearchScreen extends React.Component<Props, State> {
    state = {
        userInputText: '',
        repoInputText: '',
        isLoading: false,
    };

    render(){
        return(
            <View style={styles.container}>
                <Image source={images.logo}/>
                <View style={styles.formContainer}>
                    <Formik initialValues={{username: '', repo: ''}} onSubmit={values => {
                        this.props.navigation.navigate('Home', {values});
                        Keyboard.dismiss()}}>
                        {({handleChange, handleSubmit, values: {username, repo}}) => (
                            <View>
                                <Input
                                    autoFocus = {true}
                                    placeholderText = 'User name'
                                    additionalStyle={styles.textInput}
                                    value={username}
                                    onChangeText={handleChange('username')}/>
                                <Input
                                    placeholderText = 'Repo name'
                                    additionalStyle={styles.textInput}
                                    value={repo}
                                    onChangeText={handleChange('repo')}/>
                                <PrimaryButton
                                    title={'Fetch data'}
                                    additionalStyle={styles.button}
                                    onPressAction={handleSubmit}/>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        );
    }
}
export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBgColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: helpers.padding.l,
        paddingBottom: 150,
    },
    formContainer: {
        marginTop: helpers.margin.xl,
        width: '100%',
    },
    textInput: {
        marginTop: helpers.margin.s,
    },
    button: {
        marginTop: helpers.margin.m,
    }
});
