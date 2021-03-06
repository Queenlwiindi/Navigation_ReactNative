import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ navigation, title }) => {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={openMenu}>
                <Ionicons name='md-menu' size={28} color='gray' />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 26,
        width: "100%",
        height: 60,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red',
        letterSpacing: 1,
    },
    icons: {
        position: 'absolute',
        left: 16,
        top: 15,
    }
});

export default Header;