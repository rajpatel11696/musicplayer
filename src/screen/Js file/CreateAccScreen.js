import React, { Component } from './node_modules/react'
import { Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import { NeuView, NeuProgressBar, NeuInput, NeuButton } from './node_modules/react-native-neu-element';
import { RadioButton } from './node_modules/react-native-paper';




export default class CreateAccScreen extends Component {
    render() {
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5f9ff' }}>
                <StatusBar hidden={true} />
                <View style={{marginTop: -20}}>
                    <Image

                        source={require('../Image/TreeSignUp.jpg')}
                        style={{ width: 400, height: 220}}
                        >

                    </Image>
                </View>
                <View style={{ alignSelf: 'flex-start', marginLeft: 30, marginTop: 20 }}>
                    <Text style={{ fontSize: 35, color: '#595959' }}>Welcome</Text>
                    <Text style={{ fontSize: 24, color: '#808080' }}>Let's get started</Text>



                </View>

                <View style={{ padding: 20, marginTop:10 }}>
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

                    <View style={{ alignSelf: 'flex-start',  flexDirection: 'row'}}>
                        <RadioButton
                            value="first"
                            onPress={() => setChecked('first')}
                        />
                        <Text style={{ fontSize: 20, color: '#808080' }}>I agree to all </Text>
                        <Text style={{ fontSize: 20, color: '#808080', textDecorationLine: 'underline' }}>terms and conditions</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 25, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <NeuButton
                            color="#eef2f9"
                            width={200}
                            height={60}
                            borderRadius={50}
                        >
                            <Text style={{ fontSize: 22, color: '#808080' }}>Create Account</Text>
                        </NeuButton>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 22, color: '#808080', textDecorationLine: 'underline' }}>Sign-in Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }
}