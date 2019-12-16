import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';


export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 80, height: 80 }}
                    source={require('../images/logo.jpg')}
                //   source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                />
                <Text style={styles.logoText}>
                    Thushan
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        justifyContent:"flex-end",
        alignItems:'center'
    },
    logoText:{
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255,255,255,0.7)'
    }
  });