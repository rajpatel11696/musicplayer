import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { NeuInput, NeuView } from 'react-native-neu-element';
import { hp, wp } from '../../../Dimension';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import { storeMusicList } from '../../Action/ActionConteiner';

class SettingScreen extends Component {
    render() {
        const isDark = this.props.isDark

        return (
            <View style={{ flex: 1, backgroundColor: isDark ? '#303234' : '#e5f9ff' }}>
                <View style={{ marginTop: hp(4), flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 30, color: 'gray', justifyContent: 'center', alignSelf: 'center' }}> Setting </Text>

                </View>
                <View style={{ marginTop: hp(2), alignSelf: 'flex-start', marginLeft: wp(5) }}>
                    <Text style={{ fontSize: 26, color: 'orange' }}>Darina</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: hp(4), justifyContent: 'space-evenly' }}>
                    <NeuView color={isDark ? '#303234' : '#eef2f9'} height={90} width={90} borderRadius={16}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Clock")}>
                            <Image
                                style={{ width: 45, height: 45 }}
                                source={require('../Image/clock.png')}
                                borderRadius={20}
                            />
                        </TouchableOpacity>
                    </NeuView>
                    <NeuView color={isDark ? '#303234' : '#eef2f9'} height={90} width={90} borderRadius={16}>
                        <TouchableOpacity >
                            <Image
                                style={{ width: 45, height: 45 }}
                                source={require('../Image/Coupon_clr.png')}
                                borderRadius={20}
                            />
                        </TouchableOpacity>
                    </NeuView>

                    <NeuView color={isDark ? '#303234' : '#eef2f9'} height={90} width={90} borderRadius={16}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Artist")}>
                            <Image
                                style={{ width: 55, height: 65 }}
                                source={require('../Image/subscribe_clr.png')}
                                borderRadius={20}
                            />
                        </TouchableOpacity>
                    </NeuView>
                </View>

                <View style={{ marginTop: hp(5), alignItems: 'center', justifyContent: 'center', }}>
                    <NeuView color={isDark ? '#303234' : '#eef2f9'} height={hp(21.3)} width={wp(90)} borderRadius={10} >
                        <TouchableOpacity style={{ flexDirection: 'row', height: hp(7), width: wp(90), padding: 10, justifyContent: 'space-between' }} >

                            <Text style={{ fontSize: 20, color: 'gray' }}>My Home</Text>
                            <Image
                                style={{ width: 35, height: 35 }}
                                source={require('../Image/for_arrow.png')}
                                borderRadius={20}
                            />

                        </TouchableOpacity>
                        <View style={{ borderWidth: hp(0.1), borderColor: isDark ? '#292B2E' : '#e6e6e6', width: wp(90) }}>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', height: hp(7), width: wp(90), padding: 10, justifyContent: 'space-between' }} >

                            <Text style={{ fontSize: 20, color: 'gray' }}>Quick Access</Text>
                            <Image
                                style={{ width: 35, height: 35 }}
                                source={require('../Image/for_arrow.png')}
                                borderRadius={20}
                            />

                        </TouchableOpacity>
                        <View style={{ borderWidth: hp(0.1), borderColor: isDark ? '#292B2E' : '#e6e6e6', width: wp(90) }}>
                        </View>
                           <TouchableOpacity style={{ flexDirection: 'row', height: hp(7), width: wp(90), padding: 10, justifyContent: 'space-between' }} >

                            <Text style={{ fontSize: 20, color: 'gray' }}>Invite Friends</Text>
                            <Image
                                style={{ width: 35, height: 35 }}
                                source={require('../Image/for_arrow.png')}
                                borderRadius={20}
                            />

                        </TouchableOpacity>
                    </NeuView>
                </View>

                <View style={{ marginTop: hp(8), alignItems: 'center', justifyContent: 'center', }}>

                    <NeuView color={isDark ? '#303234' : '#eef2f9'} height={hp(28.3)} width={wp(90)} borderRadius={10} >

                        <TouchableOpacity style={{ flexDirection: 'row', height: hp(7), width: wp(90), padding: 10, justifyContent: 'space-between' }}>

                            <Text style={{ fontSize: 20, color: 'gray' }}>Change Password</Text>
                            <Image
                                style={{ width: 35, height: 35 }}
                                source={require('../Image/for_arrow.png')}
                                borderRadius={20}
                            />

                        </TouchableOpacity>
                        <View style={{ borderWidth: hp(0.1), borderColor: isDark ? '#292B2E' : '#e6e6e6', width: wp(90) }}>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', height: hp(7), width: wp(90), padding: 10, justifyContent: 'space-between' }} onPress={() => this.props.navigation.navigate("FaQ")}>

                            <Text style={{ fontSize: 20, color: 'gray' }}>FAQ's</Text>
                            <Image
                                style={{ width: 35, height: 35 }}
                                source={require('../Image/for_arrow.png')}
                                borderRadius={20}
                            />

                        </TouchableOpacity>
                        <View style={{ borderWidth: hp(0.1), borderColor: isDark ? '#292B2E' : '#e6e6e6', width: wp(90) }}>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', height: hp(7), width: wp(90), padding: 10, justifyContent: 'space-between' }} onPress={() => this.props.navigation.navigate("Theme")}>
                            <Text style={{ fontSize: 20, color: 'gray' }}>Preference</Text>
                            <Image
                                style={{ width: 35, height: 35, marginLeft: wp(50) }}
                                source={require('../Image/for_arrow.png')}
                                borderRadius={20}
                            />
                        </TouchableOpacity>
                        <View style={{ borderWidth: hp(0.1), borderColor: isDark ? '#292B2E' : '#e6e6e6', width: wp(90) }}>
                        </View>
                        <TouchableOpacity style={{ width: wp(90), padding: 10, height: hp(7), justifyContent: 'space-between' }} onPress={() => this.props.navigation.navigate("Theme")}>
                            <Text style={{ fontSize: 20, color: 'orange' }}>Sign Out</Text>
                        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)