import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { NeuInput, NeuView } from 'react-native-neu-element';
import { hp, wp } from '../../../Dimension';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { opacity } from 'react-native-redash';
import { connect } from 'react-redux'


class DemoScreen extends Component {
    onPressBack = () => {
        console.log("Click event Active")
    }
    onPressMenu = () => {
        console.log("Click event Menu Active ")
    }

    render() {
        const isDark = this.props.isDark

        return (
            <View style={{ alignItems: 'center', marginTop: hp(7), justifyContent: "center" }}>
                <NeuView color={isDark ? '#303234' : '#eef2f9'} height={hp(7)} width={wp(65)} borderRadius={50} convex>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>

                        <View>
                            <TouchableOpacity onPress={this.onPressBack}>
                                <Image
                                    style={{ width: 45, height: 45, position: 'relative', marginLeft: wp(5) }}
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

export default connect(mapStateToProps, mapDispatchToProps)(DemoScreen)


// <View style={{ position: 'absolute' }}>
//                             <View style={{ marginTop: hp(-20), marginLeft: wp(-47) }}>
//                                 <TouchableOpacity onPress={this.onPressBack}>
//                                     <NeuView color={isDark ? '#303234' : '#eef2f9'} height={45} width={45} borderRadius={50} >
//                                         <Image
//                                             style={{ width: 40, height: 40 }}
//                                             source={require('../Image/Back_Arrow.png')}
//                                         />
//                                     </NeuView>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
