import React, { Component } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity, Slider } from 'react-native';
import { NeuView } from 'react-native-neu-element';
import Animated, { Easing } from 'react-native-reanimated';
import { hp, wp } from '../../../Dimension';
import Sound from 'react-native-sound';
import { connect } from 'react-redux'
import { storeMusicList } from '../../Action/ActionConteiner';
import TextTicker from 'react-native-text-ticker'


class PlayerUiScreen extends Component {
    state = {
        isFav: true,
    }

    FavActive = () => {
        this.setState({ isFav: !this.state.isFav });
    };
    onPressBack = () => {
        console.log("Click event Active")
    }
    onPressMenu = () => {
        console.log("Click event Menu Active ")
    }
    render() {

        const isDark = this.props.isDark


        return (
            <View style={{ backgroundColor: isDark ? '#303234' : '#e5f9ff', flex: 1, }}>
                <View style={{flexDirection:'row', zIndex: 1,justifyContent:'space-between',marginHorizontal:10}}>
                    <TouchableOpacity onPress={this.onPressBack}>

                        <Image
                            style={{ width: 45, height: 45, marginTop: hp(2) }}
                            source={require('../Image/Back_Arrow.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPressMenu}>

                        <Image
                            style={{ width: 45, height: 45, marginTop: hp(2) }}
                            source={require('../Image/Menu.png')}
                        />
                    </TouchableOpacity>

                </View>

                <View style={{ alignItems: 'center', marginTop: hp(-22) }}>

                    <NeuView color={isDark ? '#303234' : '#eef2f9'} height={hp(75)} width={wp(65)} borderRadius={150} convex>
                        <Image
                            source={require('../Image/alone_cover.jpg')}
                            style={{ width: wp(61), height: hp(73), borderRadius: 150 }}
                        />

                        <View style={{ position: 'absolute', alignItems: 'center' }}>
                            <TextTicker
                                style={{ fontSize: 26, color: 'gray', marginTop: hp(50), width: wp(52) }}
                                duration={9000}
                                loop
                                bounce
                                repeatSpacer={50}
                                marqueeDelay={5000}
                            >
                                Super long piece of text is long. The quick brown fox jumps over the lazy dog.
                            </TextTicker>
                            <Text style={{ marginTop: hp(.5), color: 'gray', fontSize: 18 }}>Ft. John doe</Text>
                        </View>
                    </NeuView>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(8) }}>
                    <Text style={{ color: 'gray', fontSize: 18 }}>3:04</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: hp(5), justifyContent: "center" }}>
                    <NeuView color={isDark ? '#303234' : '#eef2f9'} height={hp(7)} width={wp(65)} borderRadius={50} convex>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>

                            <View>
                                <TouchableOpacity onPress={this.onPressBack}>
                                    <Image
                                        style={{ width: 45, height: 45, position: 'relative', marginLeft: wp(4.5) }}
                                        source={require('../Image/Backward.png')}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginLeft: wp(5) }}>
                                <NeuView color={isDark ? '#303234' : '#eef2f9'} height={90} width={90} borderRadius={45} convex>
                                    <TouchableOpacity>
                                        <NeuView color={isDark ? '#303234' : '#eef2f9'} height={70} width={70} borderRadius={35} convex>
                                            <Image
                                                style={{ width: 45, height: 45, }}
                                                source={require('../Image/plybtn.png')}
                                            />
                                        </NeuView>
                                    </TouchableOpacity>
                                </NeuView>
                            </View>
                            <View style={{ marginLeft: wp(5), marginRight: wp(4) }}>
                                <TouchableOpacity onPress={this.onPressMenu}>
                                    <Image
                                        style={{ width: 45, height: 45, }}
                                        source={require('../Image/Forward.png')}
                                    />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </NeuView>
                </View>
                <View style={{ alignItems: 'center', marginTop: hp(4) }}>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity>
                            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={40} width={40} borderRadius={50} convex >
                                <Image
                                    style={{ width: 35, height: 35 }}
                                    source={require('../Image/repeat.png')}
                                />
                            </NeuView>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.FavActive}>
                            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={40} width={40} borderRadius={50} convex style={{ marginLeft: 90 }}>
                                {this.state.isFav ? <Image
                                    style={{ width: 35, height: 35 }}
                                    source={require('../Image/blk_heart.png')}
                                />
                                    : <Image
                                        style={{ width: 35, height: 35 }}
                                        source={require('../Image/heart.png')}
                                    />
                                }
                            </NeuView>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerUiScreen)