import * as React from 'react';

//import native react components
import { View, StyleSheet, ScrollView, Text } from 'react-native';

//Container contains navigation functionality
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import Home from '../screens/Home';
import Contact from '../screens/Contact';

function CustomDrawerContent(props){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.drawerHeader}>
                <View>
                    <Text style={styles.drawerHeaderText}>Menu</Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem 
                    label="Close drawer"
                    onPress={()=> props.navigation.closeDrawer()}
                />
            </DrawerContentScrollView>
        </ScrollView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer(){
    return(
        <Drawer.Navigator backBehavior='history' drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name='Home' component={Home}/>
            <Drawer.Screen name ='Contact' component={Contact}/>
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#7FAD8B',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default function DrawerNavigation() {
    return(
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    )
}