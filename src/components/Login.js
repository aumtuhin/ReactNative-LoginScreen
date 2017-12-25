import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {
    render(){
        return(
            <View style={styles.wrapper}>
               <View style={styles.logoContainer}>
                  <Image 
                    source={require('../images/github.png')}
                    style={styles.logo}
                  />
                  <Text style={styles.title} >A Login Screen for Github! feel free to use! </Text>
               </View>
               <View style={styles.formContainer}>
                 <LoginForm />
               </View>
            </View>
        );
    }
}

const styles = {
    wrapper: {
        backgroundColor: '#3498db',
        flex: 1
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    logo: {
        height: 100,
        width: 100
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 200,
        textAlign: 'center',
        fontSize: 18,
        opacity: .6
    }
}


export default Login;