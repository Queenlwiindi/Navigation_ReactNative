import * as React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Header from '../Components/Header'

export default function About({ navigation }){
    return(
        <View style={StyleSheet.container}>
            <Header navigation={ navigation }/>
            <View style={StyleSheet.content}>
                <Text style={StyleSheet.text}>About Us</Text>
                <Button title='Go back' onPress={() => navigation.goBack()}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c203fc',
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})