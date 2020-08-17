import * as React from 'react';
import { Appbar, Switch } from 'react-native-paper';
import { Image, TouchableOpacity, Text } from 'react-native';
import { wp } from '../../../Dimension';

export default function MyHeader(props) {
    
    return (
        <Appbar.Header style={{backgroundColor: props.backgroundColor }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Setting")}>
                <Image
                    style={{ width: 35, height: 35, marginLeft: wp(2) }}
                    source={require('../Image/Back_Arrow.png')}
                />
            </TouchableOpacity>
            <Text style={{fontSize: 22, color: '#737373', marginLeft: wp(4)}}>Add Musique Alarm</Text>
            <Switch  style={{marginLeft: wp(20)}}/>
        </Appbar.Header>
    );
};
// ccf3ff

