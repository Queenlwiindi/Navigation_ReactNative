import * as React from 'react';
import { View, Button , Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Contact from '../screens/Contact';
import About from '../screens/About';

// function Home(){
//     return(
//         <View style={{ flex: 1, justifyContent:'center', alignItems: 'center', backgroundColor: 'blue'}}>
//             <Text style={{ fontSize: 20, color: 'gray'}}>Home welcome</Text>
//         </View>
//     );
// };

// function Contact({ navigation }){
//     return(
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}}>
//             <Text style={{ fontSize: 20, color: 'gray', fontWeight: 'bold'}}>Contact us</Text>
//             <Button title='Go back' onPress={() => navigation.goBack()}/>
//         </View>
//     );
// };

// function About({ navigation }){
//     return(
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
//             <Text style={{ fontSize: 20, color: 'gray', fontWeight: 'bold'}}>About us</Text>
//             <Button title='Go back' onPress={() => navigation.goBack()}/>
//         </View>
//     );
// };

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <View>
         <Tab.Navigator 
            initialRouteName="Home" 
            tabBarOptions = {{
                activeTintColor: 'light-gray'
            }}
        >
                <Tab.Screen 
                    name="Home"
                    component={Home}
                />
                <Tab.Screen
                    name="COntact"
                    component={Contact}
                />
                <Tab.Screen 
                    name="ABout"
                    component={About}
                />
         </Tab.Navigator>   
        </View>
    );
};

export default function BottomTabNavigation() {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
};