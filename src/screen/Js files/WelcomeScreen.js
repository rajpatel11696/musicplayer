import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native'

import { NeuView, NeuProgressBar, NeuButton } from 'react-native-neu-element';
import Animated, { Easing } from 'react-native-reanimated';
import { wp, hp } from '../../../Dimension';

export default class componentName extends Component {

    componentDidMount() {
        setTimeout(() => {
            // this.props.navigation.navigate("Login");

            AsyncStorage.getItem('id').then((data) => {
                console.log("asyncdata" + data)
                if (data === null) {
                    this.props.navigation.navigate("Login");
                } else {
                    this.props.navigation.navigate("Dashboard")
                }
            }).catch((error)=>{
                console.log(JSON.stringify(error))
            })
        }, 2000);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5f9ff', }}>



                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(20) }}>
                    <NeuView color='#eef2f9' height={160} width={160} borderRadius={100} convex>
                        <Image
                            style={{ width: wp(40), height: hp(20) }}
                            source={require('../Image/Musiclogo.png')}
                        />
                    </NeuView>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 38, }}>
                        Musique
    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'Arial', fontWeight: 'bold' }}>
                        Where Words Leave Off, Music Begins.
    </Text>
                </View>
                <View>
                    <Image

                        source={require('../Image/wlc.jpg')}
                        style={{ width: 380, height: 250, marginTop: hp(18) }}
                    >

                    </Image>
                </View>
            </View>
        )
    }
}