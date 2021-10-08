import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

const GenericList = (props) => {
    return (
        <SafeAreaView>
            <FlatList 
                data={props.data}
                keyExtractor={item => item.id}
                renderItem={props.item}
            />
        </SafeAreaView>
    );
}
export default GenericList;


