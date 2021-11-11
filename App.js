import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import string from './util/string';
//screens
import Login from './screens/login';
import { Image } from 'react-native';
import MenuItem from './screens/menuItem'
import MenuBar from './screens/menuBar';
import Balance from './screens/balance';
import Order from './screens/order';
import { OrderContextProvider } from './contexts/orderContext';
import { BarContextProvider } from './contexts/barContext';
import QRScanner from './screens/qrScanner';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Saldo" component={Balance} />
        <Stack.Screen name={string.SCREEN_BAR.name} component={MenuBar} 
          options={{ title: string.SCREEN_BAR_TITLE.name , headerTitleAlign: 'center' }} />
        <Stack.Screen name="menuItem" component={MenuItem} options={{title:"Agregar al pedido", headerTitleAlign: 'center'}} />
        <Stack.Screen name="qrScanner" component={QRScanner} options={{title:"Scannear QR", headerTitleAlign: 'center'}} />
        <Stack.Screen name="order" component={Order} options={{title:"Mi Orden", headerTitleAlign: 'center'}}/>
        <Stack.Screen name="login" component={Login} options={{title:"BirraYa!", headerTintColor: "#ffffff", headerLeft: props => <LogoTitle {...props} />, headerStyle: {
            backgroundColor: '#000000',
          }, headerShown:true }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <BarContextProvider>
      <OrderContextProvider>
        <App />
      </OrderContextProvider>
    </BarContextProvider>
  );
};

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./images/logo.png')}
    />
  );
}
