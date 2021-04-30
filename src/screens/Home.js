import * as React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import Header from '../Components/Header';

export default function Home({ navigation }){
    return(
        <View style={styles.container}>
            <Header navigation={ navigation }/>
            <View style={styles.content}>
                <Text style={styles.text}> Home Page</Text>
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
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
        color: 'gray',
        fontWeight: 'bold'
    }
})