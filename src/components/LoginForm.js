import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,KeyboardAvoidingView} from 'react-native';

class LoginForm extends Component {
    render(){
        return(
            <KeyboardAvoidingView>
                <View style={styles.formContainer}>
                <TextInput style={styles.input}
                placeholder='email or username'
                returnKeyType={'next'}
                keyboardType='email-address'
                autoCorrect={false}
                placeholderTextColor='rgba(255,255,255,.8)'
                underlineColorAndroid='transparent' />

                <TextInput style={styles.input} 
                placeholder='password'
                placeholderTextColor='rgba(255,255,255,.8)'
                underlineColorAndroid='transparent'
                returnKeyType={'go'}
                secureTextEntry/>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText} >LOGIN</Text>
                </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        padding: 30,
        marginBottom: 100
    },
    input: {
        backgroundColor: 'rgba(255,255,255, .6)',
        height: 60,
        opacity: .7,
        marginBottom: 15,
        paddingHorizontal: 20,
        color: '#fff',
        fontSize: 20
    },
    btn: {
        backgroundColor: '#2980b9',
        paddingVertical: 20
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    }
});

export default LoginForm;