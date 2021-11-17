import React from 'react';
import { TextInput } from 'react-native';

const Input = (props) => {
   return (
      <TextInput
         value={props.value}
         onChangeText={props.onChangeText}
         placeholder={props.placeholder}
         secureTextEntry={props.secureTextEntry}
         style={props.inputStyle}
         keyboardType={props.type}
         maxLength={props.length}
      />
   );
}

export default Input;






