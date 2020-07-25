import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { NeuView, NeuProgressBar } from 'react-native-neu-element';
import Animated, { Easing } from 'react-native-reanimated';


export default class componentName extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#e5f9ff', flex: 1 }}>

                {/* -------------------------------------------------------------------------------------------------------------- */}

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <NeuView color='#eef2f9' height={140} width={140} borderRadius={100} inset>
                        <Image
                            style={{ width: 125, height: 125, borderRadius: 100 }}
                            source={require('../Image/ProfilePic.jpg')} />
                    </NeuView>
                </View>

                {/* --------------------------------------------------------------------------------------------------------------- */}

                <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 26, color: '#808080' }}>Raj Patel</Text>
                </View>

                <TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#008B8B' }}>Edit Profile</Text>
                    </View>
                </TouchableOpacity>

                {/* ------------------------------------------------------------------------------------------------- */}

                <View style={{ marginTop: 20, marginLeft: 30 }}>
                    <Text style={{ fontSize: 26, color: '#808080' }}>Settings</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15, }}>

                    <TouchableOpacity>
                        <View style={{ padding: 5 }}>
                            <NeuView color='#eef2f9' height={50} width={320} borderRadius={20} concave>
                                <Text style={{ fontSize: 22, color: '#808080', alignSelf: 'flex-start', marginLeft: 20 }}>General</Text>
                            </NeuView>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ padding: 5 }}>
                            <NeuView color='#eef2f9' height={50} width={320} borderRadius={20} concave>
                                <Text style={{ fontSize: 22, color: '#808080', alignSelf: 'flex-start', marginLeft: 20 }}>Appearance</Text>
                            </NeuView>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ padding: 5 }}>
                            <NeuView color='#eef2f9' height={50} width={320} borderRadius={20} concave>
                                <Text style={{ fontSize: 22, color: '#808080', alignSelf: 'flex-start', marginLeft: 20 }}>About us</Text>
                            </NeuView>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ padding: 5 }}>
                            <NeuView color='#eef2f9' height={50} width={320} borderRadius={20} concave>
                                <Text style={{ fontSize: 22, color: '#808080', alignSelf: 'flex-start', marginLeft: 20 }}>Leave a feedback</Text>
                            </NeuView>
                        </View>
                    </TouchableOpacity>
                    {/* ----------------------------------------------------------------------------------------------------------------- */}


                </View>


            </View>
        )
    }
}