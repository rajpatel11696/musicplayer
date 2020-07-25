import React, { Component } from 'react'
import { NeuView, NeuProgressBar, NeuInput, NeuButton } from 'react-native-neu-element';
import { Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'


export default class LoginScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5f9ff' }}>
                <StatusBar hidden={true} />

                <View style={{ marginTop: -20 }}>
                    <Image

                        source={require('../Image/TreeSignUp.jpg')}
                        style={{ width: 400, height: 220 }}>

                    </Image>
                </View>
                <View style={{ padding: 25, alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: 40, color: '#595959' }}>Welcome</Text>
                    <Text style={{ fontSize: 28, color: '#808080' }}>Let's get started</Text>

                </View>



                <View style={{ padding: 5 }}>
                    <NeuInput

                        prefix={
                            <Image
                                source={require('../Image/user.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        }
                        placeholder='Your Email here' width={350} height={60} color='#eef2f9' borderRadius={50}></NeuInput>
                </View>
                <View style={{ padding: 7 }}>

                    <NeuInput
                        prefix={
                            <Image
                                source={require('../Image/Pass.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        }
                        placeholder='Your password here' width={350} height={60} color='#eef2f9' borderRadius={50}></NeuInput>
                </View>
                <TouchableOpacity>
                    <View style={{ alignSelf: 'flex-start', marginLeft: 30, padding: 7 }}>
                        <Text style={{ fontSize: 20, color: '#808080', textDecorationLine: 'underline' }}>Forgot Password?</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 25, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <NeuButton
                            color="#eef2f9"
                            width={150}
                            height={60}
                            borderRadius={50}
                        >
                            <Text style={{ fontSize: 24, color: '#808080' }}>Sign-in</Text>
                        </NeuButton>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={{ padding: 15 }}>
                        <Text style={{ fontSize: 24, color: '#808080', textDecorationLine: 'underline' }}>Create An Account</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
