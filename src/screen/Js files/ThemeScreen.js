import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import AppHeader from '../Components/AppHeader'
import { hp, wp } from '../../../Dimension';
import { NeuButton } from 'react-native-neu-element';
import { RadioButton, Switch } from 'react-native-paper';

export default class componentName extends Component {

    state = {
        checked: 'first',
        isSwitchOn: false,
    };


    render() {
        const { checked } = this.state;
        const { isSwitchOn } = this.state;
        return (

            <View style={{ flex: 1, backgroundColor: '#e5f9ff' }}>
                <Text style={{ fontSize: 22, marginLeft: wp(2), marginTop: hp(10), color: 'gray' }}>Theme</Text>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: wp(5) }}>
                        <Text style={{ fontSize: 20, color: 'gray', marginTop: hp(2), marginLeft: wp(6) }}>Light</Text>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ checked: 'first' }); }}

                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: wp(5) }}>
                        <Text style={{ fontSize: 20, color: 'gray', marginTop: hp(1), marginLeft: wp(6) }}>Dark</Text>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => { this.setState({ checked: 'second' }); }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: wp(4) }}>
                        <Text style={{ fontSize: 20, color: 'gray', marginTop: hp(1), marginLeft: wp(6) }}>Black Mode</Text>
                        <Switch
                            value={isSwitchOn}
                            onValueChange={() => { this.setState({ isSwitchOn: !isSwitchOn }); }
                            }
                        />
                    </View>

                </View>
                <View style={{justifyContent: 'center', alignItems:'center', marginTop: hp(55)}}>                
                    <NeuButton
                    color="#eef2f9"
                    width={wp(80)}
                    height={hp(7)}
                    borderRadius={50}
                    onPress={() => this.props.navigation.navigate("Setting")} >

                    <Text style={{ fontSize: 24, color: 'orange' }}>Apply</Text>
                </NeuButton>
                </View>
            </View>
        )
    }
}