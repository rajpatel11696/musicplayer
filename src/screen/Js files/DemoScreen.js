import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { NeuInput, NeuView } from 'react-native-neu-element';
import { hp, wp } from '../../../Dimension';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { opacity } from 'react-native-redash';
import { connect } from 'react-redux'
import { Value } from 'react-native-reanimated';
import TextTicker from 'react-native-text-ticker'

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
        {/* <NeuView color={isDark ? '#303234' : '#eef2f9'} height={hp(10)} width={wp(94)} borderRadius={20} inset>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(2) }}>
            <View style={{ width: wp(43), marginRight: wp(4) }}>
              <TextTicker
                style={{ fontSize: 22, color: 'gray', width: wp(43) }}
                duration={9000}
                loop
                bounce
                repeatSpacer={50}
                marqueeDelay={5000}>
                {this.props.musicList.length >0?this.props.musicList[this.props.currentPlayIndex].title:''}</TextTicker>
              <TextTicker
                style={{ fontSize: 14, color: 'gray', }}
                duration={9000}
                loop
                bounce
                repeatSpacer={50}
                marqueeDelay={5000}>
                {this.props.musicList.length >0?this.props.musicList[this.props.currentPlayIndex].title:''}</TextTicker>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: wp(43) }}>
              <TouchableOpacity>
                <NeuView color={isDark ? '#303234' : '#eef2f9'} height={45} width={45} borderRadius={50} concave>
                  <Image
                    style={{ width: 36, height: 36 }}
                    source={require('../Image/Backward.png')}
                  />
                </NeuView>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeuView color={isDark ? '#303234' : '#eef2f9'} height={65} width={65} borderRadius={50} concave>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require('../Image/plybtn.png')}
                  />
                </NeuView>
              </TouchableOpacity>
              <TouchableOpacity>
                <NeuView color={isDark ? '#303234' : '#eef2f9'} height={40} width={40} borderRadius={50} concave >
                  <Image
                    style={{ width: 36, height: 36 }}
                    source={require('../Image/Forward.png')}
                  />
                </NeuView>
              </TouchableOpacity>
            </View>
          </View>
        </NeuView> */}
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
