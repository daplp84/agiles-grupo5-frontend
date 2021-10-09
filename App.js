import React from 'react';
import Login from './screens/login';
import { StyleSheet, Text, View, Image, TextInput, Header } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MenuItem from './screens/menuItem'

export default function App() {
  const Stack = createStackNavigator();
  const itemf = {
        id: '1',
        name: 'Cerveza Golden X',
        description: 'Esta es la mejor cerveza',
        price: '300',
        category:'',
        subcategory: '',
        image: 'data:image/jpeg;base64,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'
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen name="balance" component={Balance} options={{}}>
        </Stack.Screen>*/}
        {/*<Stack.Screen name="menu" component={Menu} options={{}}>
        </Stack.Screen>*/}
        <Stack.Screen name="menuItem" options={{}}>
          {props => <MenuItem {...props} item={itemf} />}
        </Stack.Screen>
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