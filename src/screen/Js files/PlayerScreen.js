import React, { Component } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity, Slider } from 'react-native';
import { NeuView } from 'react-native-neu-element';
import Animated, { Easing } from 'react-native-reanimated';
import { hp, wp } from '../../../Dimension';
import Sound from 'react-native-sound';
import { connect } from 'react-redux'
import { storeMusicList } from '../../Action/ActionConteiner';
import TextTicker from 'react-native-text-ticker';


class PlayerScreen extends Component {

    render() {

        const isDark = this.props.isDark
       

        return (
            <View style={{ backgroundColor: isDark ? '#303234' : '#e5f9ff', flex: 1, }}>

                <StatusBar hidden={true} />

                <View style={{ marginTop: hp(8), marginLeft: wp(10) }}>
                    <View>
                        <TextTicker
                            style={{ fontSize: 30, color: 'gray', width: wp(62) }}
                            duration={9000}
                            loop
                            bounce
                            repeatSpacer={50}
                            marqueeDelay={5000}>
                            Ek Taarfa Pyar
                        </TextTicker>

                    </View>
                    <View>
                        <TextTicker
                            style={{ fontSize: 24, color: 'gray', width: wp(50) }}
                            duration={9000}
                            loop
                            bounce
                            repeatSpacer={50}
                            marqueeDelay={5000}>
                            Darshan Raval                        
                        </TextTicker>

                    </View>
                </View>
                <View style={{ marginTop: hp(4), flexDirection: 'row', marginLeft: wp(10) }}>
                    <View>
                        <NeuView color={isDark ? '#303234' : '#eef2f9'} height={450} width={60} borderRadius={100} convex>
                            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={450} width={60} borderRadius={100} inset>
                                <View style={{ flexDirection: 'column', }}>
                                    <TouchableOpacity>
                                        <Image
                                            style={{ width: 50, height: 60, marginTop: hp(-1) }}
                                            source={require('../Image/playbutton.png')}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            style={{ width: 50, height: 60, marginTop: hp(5) }}
                                            source={require('../Image/Pause_new.png')}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            style={{ width: 50, height: 60, marginTop: hp(5) }}
                                            source={require('../Image/next_new.png')}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            style={{ width: 50, height: 60, marginTop: hp(5) }}
                                            source={require('../Image/previous_new.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </NeuView>
                        </NeuView>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: wp(20) }}>

                        <NeuView color={isDark ? '#303234' : '#eef2f9'} height={450} width={450} borderRadius={250} >
                            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={420} width={420} borderRadius={250} inset>
                                <NeuView color={isDark ? '#303234' : '#eef2f9'} height={320} width={320} borderRadius={250} concave>
                                    <Image
                                        style={{ width: 280, height: 280, borderRadius: 200 }}
                                        source={require('../Image/Album_Cover.jpg')}
                                    />
                                </NeuView>
                            </NeuView>
                        </NeuView>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop: hp(12) }}>
                    <NeuView color={isDark ? '#303234' : '#eef2f9'} height={40} width={320} borderRadius={250} >
                        <Text style={{ fontSize: 18, color: 'gray', alignItems: 'center', justifyContent: 'center' }}> List of Songs</Text>
                    </NeuView>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isDark: state.mainReducer.darkMode
})

const mapDispatchToProps = dispatch => {
    return {
        storeMusicList: (musics) => dispatch(storeMusicList(darkMode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen)