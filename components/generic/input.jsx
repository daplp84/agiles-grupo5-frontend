import React from 'react';
import { TextInput } from 'react-native';

const Input = (props) => {
   return (
      <TextInput onChangeText={props.onChangeText}
         placeholder={props.placeholder}
         secureTextEntry={props.secureTextEntry}
         style={props.inputStyle}
      />
   );
}

export default Input;






