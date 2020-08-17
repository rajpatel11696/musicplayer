import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppHeader from '../Components/AppHeader'
import MyHeader from '../Components/AppHeader'
import { hp, wp } from '../../../Dimension';
import { NeuButton } from 'react-native-neu-element';
import { connect } from 'react-redux'
import { storeMusicList } from '../../Action/ActionConteiner';

class MusiqueAlarm extends Component {

    render() {

        const isDark = this.props.isDark

        return (
            <View style={{ flex: 1, backgroundColor: isDark?'#303234':'#e5f9ff' }}>
                <MyHeader backgroundColor={isDark? '#27282a' : '#c3f3ff'}/>

                <View style={{ borderWidth: 0.8, borderColor: isDark?'#292B2E': '#e6e6e6', width: wp(90),alignSelf: 'center', justifyContent: 'center', marginTop: hp(50) }}>
                </View>
                <View style={{ marginTop: hp(3), marginLeft: wp(6) }}>
                    <Text style={{ fontSize: 20, color: 'gray' }}>Repeat</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent:'space-evenly', marginTop: hp(3), alignItems:'center'}}>
                    <Text style={{ fontSize: 16, color: 'orange' }}>S</Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>M</Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>T</Text>
                    <Text style={{ fontSize: 16, color: 'orange' }}>W</Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>T</Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>F</Text>
                    <Text style={{ fontSize: 16, color: 'gray' }}>S</Text>

                </View>
                <View style={{ borderWidth: 0.8, borderColor: isDark?'#292B2E': '#e6e6e6', width: wp(90), justifyContent: 'center', marginTop: hp(3), alignSelf: 'center' }}>
                </View>
                <View style={{ marginTop: hp(3), marginLeft: wp(6), flexDirection: 'row', justifyContent: 'space-between',  }}>
                    <Text style={{ fontSize: 20, color: 'gray' }}>Alarm Ringtone</Text>
                    
                    <Text style={{ fontSize: 16, color: 'gray', marginRight: wp(-32),alignSelf:'center' }}>Change</Text>
                    <Image
                        style={{ width: 20, height: 20, marginRight: wp(6), alignSelf:'center' }}
                        source={require('../Image/for_arrow.png')}
                        borderRadius={20} />
                </View>
                <Text style={{ fontSize: 14, color: 'gray', marginLeft: wp(6) }}>Alarm : default song</Text>
                <View style={{ borderWidth: 0.8, borderColor: isDark?'#292B2E': '#e6e6e6', width: wp(90), justifyContent: 'center', marginTop: hp(3),alignSelf: 'center' }}>
                </View>
                <View style={{justifyContent: 'center', alignItems:'center', marginTop: hp(5)}}>                
                    <NeuButton
                    color={isDark?'#303234': '#eef2f9'}
                    width={wp(80)}
                    height={hp(7)}
                    borderRadius={50}
                    onPress={() => this.props.navigation.navigate("Setting")} >

                    <Text style={{ fontSize: 24, color: 'orange' }}>Apply Changes</Text>
                </NeuButton>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isDark:state.mainReducer.darkMode
  })
  
  const mapDispatchToProps = dispatch=>{
    return{
        storeMusicList:(musics)=>dispatch(storeMusicList(darkMode))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MusiqueAlarm)