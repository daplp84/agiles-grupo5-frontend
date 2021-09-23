import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Header } from 'react-native';

export default function Login() {
  return (
    
    <View style={styles.container}>
     <Image
        style={styles.tinyLogo}
        source={require('../images/logo.png')}
      />
      <Text>Bienvendo</Text>
      <TextInput style={styles.input} placeholder="Usuario"></TextInput>
      <TextInput style={styles.input} placeholder="Contraseña"></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  logo: {
    width: 66,
    height: 58,
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
});