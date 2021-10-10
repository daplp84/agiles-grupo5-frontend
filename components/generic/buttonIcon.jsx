import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const ButtonIcon = (props) => {
   return (
    <TouchableOpacity onPress={props.onPress} style={props.buttonStyle}>
        <Icon name={props.name} type='feather'/>
    </TouchableOpacity>
   );
}

export default ButtonIcon;