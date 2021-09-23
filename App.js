import React from 'react';
import Login from './screens/login';
import { StyleSheet, Text, View, Image, TextInput, Header } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen name="balance" component={Balance} options={{}}>
        </Stack.Screen>*/}
        {/*<Stack.Screen name="menu" component={Menu} options={{}}>
        </Stack.Screen>*/}
        {/*<Stack.Screen name="menuItem" component={MenuItem} options={{}}>
        </Stack.Screen>*/}
        <Stack.Screen name="login" component={Login} options={{title:"BirraYa!", headerTintColor: "#ffffff", headerLeft: props => <LogoTitle {...props} />, headerStyle: {
            backgroundColor: '#000000',
          }, headerShown:true }}>
        </Stack.Screen>  
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./images/logo.png')}
    />
  );
}