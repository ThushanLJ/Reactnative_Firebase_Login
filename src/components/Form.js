import React, { Component } from 'react';
import {
    StyleSheet, Text, View, StatusBar, Image, TextInput,
    TouchableOpacity
} from 'react-native';

import * as firebase from "firebase";
import 'firebase/firestore';
// import firestore from '@react-native-firebase/firestore';

var config = {
    apiKey: "AIzaSyAHL9bpnXibjXbeMuccKG6R0vdlHXWgFOM",
    authDomain: "reactnativelogin-b03b5.firebaseapp.com",
    databaseURL: "https://reactnativelogin-b03b5.firebaseio.com",
    projectId: "reactnativelogin-b03b5",
    storageBucket: "reactnativelogin-b03b5.appspot.com",
    messagingSenderId: "733915084849",
    appId: "1:733915084849:web:5df4254ed07e0bee58fd10",
    measurementId: "G-46880PHT8X"
};

firebase.initializeApp(config);

export default class Form extends Component {

    state = {
        email: '',
        password: ''
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    action = (email, password) => {
        if (this.props.type == 'Signup') {
            try {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(res => {
                        firebase.firestore().collection('user').doc(res.user.uid).set({
                            email: res.user.email
                        })
                        .then(result => {
                            alert('You have been successfully registered!');
                        });
                    });
            } catch (error) {
                console.log(error.toString(error));
            }
        } else {
            try {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(res => {
                        alert('You have been successfully loged in!');
                    });
            } catch (error) {
                console.log(error.toString(error));
            }
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                    onChangeText={this.handleEmail}
                />

                <TextInput
                    style={styles.inputBox}
                    placeholder="Password"
                    placeholderTextColor="#ffffff"
                    secureTextEntry={true}
                    onChangeText={this.handlePassword}
                />

                <TouchableOpacity style={styles.button}
                    onPress={
                        () => this.action(this.state.email, this.state.password)
                    }
                >
                    <Text style={styles.buttonText}>
                        {this.props.type}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});