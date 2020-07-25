import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { NeuView, NeuProgressBar, NeuButton } from 'react-native-neu-element';
import Animated, { Easing } from 'react-native-reanimated';

export default class componentName extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5f9ff', }}>



                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <NeuView color='#eef2f9' height={160} width={160} borderRadius={100} convex>
                        <Image
                            style={{ width: 160, height: 160 }}
                            source={require('../Image/Musiclogo.png')}
                        />
                    </NeuView>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 38,  }}>
                        Musique
    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center',padding:10 }}>
                    <Text style={{ fontSize: 18, fontFamily:'Arial', fontWeight:'bold' }}>
                    Where words leave off, music begins.
    </Text>
                </View>
                <View>
                    <Image

                        source={require('../Image/wlc.jpg')}
                        style={{ width: 380, height: 250, marginTop: 150 }}
                    >

                    </Image>
                </View>
            </View>
        )
    }
}