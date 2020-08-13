import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, Slider } from 'react-native';
import { NeuView } from 'react-native-neu-element';
import Animated, { Easing } from 'react-native-reanimated';
import { hp, wp } from '../../../Dimension';
import Sound from 'react-native-sound';


const { Value, Clock, concat } = Animated;
export default class HomeScreen extends Component {
constructor(props){
  super(props)
  let whoosh= null
}
  state = {
    isPlay: true,
    whoosh: null

  }

  componentDidMount() {
    var whoosh = new Sound('/storage/emulated/0/UCDownloads/Kamariya-Aastha-Gill Sachin-Sanghvi Jigar-Saraiya Divya-Kumar.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

      // Play the sound with an onEnd callback
      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
    this.setState({
      whoosh: whoosh
    })
  }
  // /storage/emulated/0/UCDownloads/Kamariya-Aastha-Gill Sachin-Sanghvi Jigar-Saraiya Divya-Kumar.mp3

  render() {
    const progressStyle = {
      width: wp(38),
      height: hp(1.2),
      backgroundColor: '#99ccff',
      borderRadius: 100,
    };
    return (

      <View style={{ backgroundColor: '#e5f9ff', flex: 1, }}>
        <StatusBar hidden={true} />

        <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', marginTop: hp(5.5) }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")}>
            <NeuView color='#eef2f9' height={65} width={65} borderRadius={50} concave>
              <Image
                style={{ width: 40, height: 40 }}
                source={require('../Image/Back_Arrow.png')}
              />
            </NeuView>
          </TouchableOpacity>

          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20, color: '#808080' }}>PLAYING NOW</Text>
          </View>
          <TouchableOpacity>
            <NeuView color='#eef2f9' height={65} width={65} borderRadius={50} concave>
              <Image
                style={{ width: 40, height: 40 }}
                source={require('../Image/Menu.png')} />
            </NeuView>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(7) }}>
          <NeuView color='#eef2f9' height={200} width={200} borderRadius={100} inset>
            <Image
              style={{ width: 180, height: 180, borderRadius: 100 }}
              source={require('../Image/Album_Cover.jpg')}
            />
          </NeuView>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(5) }}>
          <View>
            <Text style={{ fontSize: 30, color: '#5c5757', fontWeight: '500' }}>LOST IT</Text>
          </View>
          <View>
            <Text style={{ fontSize: 24, color: '#808080' }}>Flume ft. Vic Methos</Text>
          </View>
        </View>

        {/* ------------------------------------------------------------------------ */}
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp(7) }}>

            <Text style={{ fontSize: 15, color: 'gray', fontWeight: '700', marginRight: wp(50) }}>1:21</Text>
            <Text style={{ fontSize: 15, color: 'gray', fontWeight: '700', }}>3:46</Text>
          </View>

        </View>

        <Slider
          style={{ marginLeft: wp(5), width: wp(85) }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#8AAAFF"
          maximumTrackTintColor="#DAE6F4"

          thumbTintColor="#7B9BFF" />



        {/* ---------------------------------------------------------------------------------------------------------- */}

        <View style={{ flexDirection: "row", justifyContent: 'space-evenly', marginTop: hp(5) }}>
          <TouchableOpacity>
            <NeuView color='#eef2f9' height={80} width={80} borderRadius={50} convex>
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../Image/Backward.png')}
              />

            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            if (this.state.isPlay){
              this.setState({isPlay: false}, () => {this.state.whoosh.pause();})
            }
            else{
              this.setState({isPlay: true}, () => {this.state.whoosh.play();})

            }
          }
          } >
            <NeuView color='#99ccff' height={80} width={80} borderRadius={50} customLightShadow={{ offsetX: 10, offsetY: 6 }} convex>

              <Image
                style={{ width: 45, height: 45 }}
                source={require('../Image/Pause.png')}
              />

            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity>
            <NeuView color='#eef2f9' height={80} width={80} borderRadius={50} convex>
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../Image/Forward.png')}
              />
            </NeuView>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
