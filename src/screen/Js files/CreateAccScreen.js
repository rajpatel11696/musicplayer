import React, { Component } from 'react'
import { Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import { NeuView, NeuProgressBar, NeuInput, NeuButton } from 'react-native-neu-element';
import { RadioButton } from 'react-native-paper';
import {wp,hp} from '../../../Dimension';

export default class CreateAccScreen extends Component {
    render() {
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5f9ff' }}>
                <StatusBar hidden={true} />
                <View>
                    <Image

                        source={require('../Image/TreeSignUp.jpg')}
                        style={{ width: wp(90), height: hp(40)}}
                        >

                    </Image>
                </View>
                <View style={{ alignSelf: 'flex-start', marginLeft: wp(7),}}>
                    <Text style={{ fontSize: 32, color: '#595959' }}>Welcome</Text>
                    <Text style={{ fontSize: 22, color: '#808080' }}>Let's get started</Text>



                </View>

                <View style={{ padding: 10, marginTop:10 }}>
                    <NeuInput
                        prefix={
                            <Image
                                source={require('../Image/user.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        }
                        placeholder='Your Email here' width={wp(90)} height={hp(7.5)} color='#eef2f9' borderRadius={50}></NeuInput>
                </View>
                <View style={{ padding: 7 }}>
                    <NeuInput
                        prefix={
                            <Image
                                source={require('../Image/Pass.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        }
                        placeholder='Your password here' width={wp(90)} height={hp(7.5)} color='#eef2f9' borderRadius={50}></NeuInput>
                </View>
                <TouchableOpacity>

                    <View style={{flexDirection: 'row', marginLeft: -20}}>
                        <RadioButton
                            value="first"
                            onPress={() => setChecked('first')}
                        />
                        <Text style={{ fontSize: 18, color: '#808080' }}>I agree to all </Text>
                        <Text style={{ fontSize: 18, color: '#808080', textDecorationLine: 'underline' }}>terms and conditions</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <NeuButton
                            color="#eef2f9"
                            width={wp(50)}
                            height={hp(8)}
                            borderRadius={50}
                        >
                            <Text 
                            onPress={()=> this.props.navigation.navigate("Dashboard")}
                            style={{ fontSize: 22, color: '#808080' }}>Create Account</Text>
                        </NeuButton>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={{ marginTop: 14 }}>
                        <Text 
                        onPress={()=> this.props.navigation.navigate("Login")}
                        style={{ fontSize: 22, color: '#808080', textDecorationLine: 'underline' }}>Sign-in Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }
}