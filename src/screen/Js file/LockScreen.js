import React, { Component } from 'react'
import { NeuView, NeuProgressBar, NeuInput, NeuButton } from 'react-native-neu-element';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'

export default class LockScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5f9ff' }}>
                <StatusBar hidden={true} />

                <View>
                    <Image

                        source={require('../Image/TreeImg.jpg')}
                        style={{ width: 350, height: 230 }}
                        >

                    </Image>
                </View>
                <View style={{ padding: 25, alignSelf: 'flex-start' }}>
                    <Text style={{ fontSize: 32, color: '#595959' }}>Welcome Back</Text>
                    <Text style={{ fontSize: 30, color: '#595959' }}>Raj Patel</Text>
                    <Text style={{ fontSize: 20, color: '#808080' }}>Continue where you left off</Text>

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
                <View style={{ marginTop: 25, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <NeuButton
                            color="#eef2f9"
                            width={150}
                            height={60}
                            borderRadius={50}
                            convex
                        >
                            <Text style={{ fontSize: 24, color: '#808080' }}>Sign-in</Text>
                        </NeuButton>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={{ padding: 15 }}>
                        <Text style={{ fontSize: 24, color: '#808080', textDecorationLine: 'underline' }}>Not Raj Patel?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
