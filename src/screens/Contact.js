import * as React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


export default function Contact({ navigation }){
    return(
        <View style={StyleSheet.container}>
            <View style={StyleSheet.content}>
                <Text style={StyleSheet.text}>Contact Us</Text>
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