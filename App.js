import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import string from './util/string';
//screens
import Login from './screens/login';
import MenuBar from './screens/menuBar';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen name="balance" component={Balance} options={{}}>
        </Stack.Screen>*/}

        {/*<Stack.Screen name="menuItem" component={MenuItem} options={{}}>
        </Stack.Screen>*/}
        <Stack.Screen name={string.SCREEN_BAR.name} component={MenuBar} options={{ title: string.SCREEN_BAR_TITLE.name }} />
        <Stack.Screen name="login" component={Login} options={{
          title: "BirraYa!", headerTintColor: "#ffffff", headerLeft: props => <LogoTitle {...props} />, headerStyle: {
            backgroundColor: '#000000',
          }, headerShown: true
        }}>
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