import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, Slider } from 'react-native';
import { NeuView } from 'react-native-neu-element';
import Animated, { Easing } from 'react-native-reanimated';
import { hp, wp } from '../../../Dimension';
import Sound from 'react-native-sound';
import { connect } from 'react-redux'
import { storeMusicList, storePlayObject, storeCurrentPLayIndex } from '../../Action/ActionConteiner';
import TextTicker from 'react-native-text-ticker';

const { Value, Clock, concat } = Animated;

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    let whoosh = null
  }
  state = {
    isPlay: true,
    whoosh: null,
    playSeconds: 0,
    duration: 0,
    cureentPlayIndex: 0,
    author: '',
    title: '',
    cover: '',
    songTotalTime: 0

  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      this.props.playObject.getCurrentTime((seconds, isPlaying) => {

        this.setState({
          playSeconds: seconds
        }, () => {

          console.log(this.state.playSeconds)
        });
      })
    }, 1000);
    console.log(JSON.stringify(this.props.route.params.data))
    var whoosh = new Sound(this.props.route.params.data.path, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }

      this.props.storePlayObject(whoosh)

      // loaded successfully
      console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
      this.setState({
        duration: whoosh.getDuration(),
        cureentPlayIndex: this.props.route.params.index,
        author: this.props.route.params.data.author,
        title: this.props.route.params.data.title,

        cover: this.props.route.params.data.cover,
        songTotalTime: this.props.route.params.data.duration
      });
      this.props.storeCurrentINdex(this.props.route.params.index)
      // Play the sound with an onEnd callback
      this.props.playObject.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });

    // this.setState({
    //   whoosh: whoosh
    // })
  }
  SectoMin = (millis) => {

    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;

  }

  SecoundtoMin = (value) => {
    var sec = value % 60 ? value % 60 : '00'
    var secPae = parseInt(sec) > 9 ? parseInt(sec) : '0' + parseInt(sec)
    return Math.floor(value / 60) + ":" + secPae

  }
  onSliderEditing = value => {

    this.props.playObject.setCurrentTime(value);
    this.setState({ playSeconds: value });
  }

  render() {
    const isDark = this.props.isDark

    const progressStyle = {
      width: wp(38),
      height: hp(1.2),
      backgroundColor: '#99ccff',
      borderRadius: 100,
    };
    return (

      <View style={{ backgroundColor: isDark ? '#303234' : '#e5f9ff', flex: 1, }}>
        <StatusBar hidden={true} />

        <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', marginTop: hp(5.5) }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={65} width={65} borderRadius={50} concave>
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
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={65} width={65} borderRadius={50} concave>
              <Image
                style={{ width: 40, height: 40 }}
                source={require('../Image/Menu.png')} />
            </NeuView>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(7) }}>
          {this.state.cover === undefined ? <NeuView color={isDark ? '#303234' : '#eef2f9'} height={200} width={200} borderRadius={100} inset>
            <Image
              style={{ width: 180, height: 180, borderRadius: 100 }}
              source={require('../Image/Album_Cover.jpg')}
            />
          </NeuView>
            :
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={200} width={200} borderRadius={100} inset>
              <Image
                style={{ width: 180, height: 180, borderRadius: 100 }}
                source={{ uri: this.state.cover }}
              />
            </NeuView>
          }
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(5), }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 300 }}>
            {/* <Text style={{ fontSize: 30, color: '#5c5757', fontWeight: '500' }}>{this.props.route.params.data.title}</Text> */}
            <TextTicker
              style={{ fontSize: 30, color: 'gray' }}
              duration={9000}
              loop
              bounce
              repeatSpacer={50}
              marqueeDelay={5000}
            >
              {this.state.title}
            </TextTicker>

          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 200 }}>
            {/* <Text style={{ fontSize: 24, color: '#808080' }}>{this.props.route.params.data.author}</Text> */}
            <TextTicker
              style={{ fontSize: 24, color: 'gray' }}
              duration={9000}
              loop
              bounce
              repeatSpacer={50}
              marqueeDelay={5000}
            >
              {this.state.author}
            </TextTicker>

          </View>
        </View>

        {/* ------------------------------------------------------------------------ */}
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp(7) }}>

            <Text style={{ fontSize: 15, color: 'gray', fontWeight: '700', marginRight: wp(50) }}>{this.SecoundtoMin(this.state.playSeconds)}</Text>
            <Text style={{ fontSize: 15, color: 'gray', fontWeight: '700', }}>{this.SectoMin(this.state.songTotalTime)}</Text>
          </View>

        </View>

        <Slider

          onValueChange={this.onSliderEditing}
          style={{ marginLeft: wp(5), width: wp(85) }}
          maximumValue={this.state.duration}
          minimumTrackTintColor="#8AAAFF"
          maximumTrackTintColor="#DAE6F4"
          value={this.state.playSeconds}
          thumbTintColor="#7B9BFF" />



        {/* ---------------------------------------------------------------------------------------------------------- */}

        <View style={{ flexDirection: "row", justifyContent: 'space-evenly', marginTop: hp(5) }}>
          <TouchableOpacity onPress={() => {
            if (this.state.cureentPlayIndex !== 0) {
              this.setState({
                cureentPlayIndex: this.state.cureentPlayIndex - 1
              }, () => {
                this.props.storeCurrentINdex(this.state.cureentPlayIndex)
                const playObject = this.props.musicArray[this.state.cureentPlayIndex]
                if (this.props.playObject.release !== undefined) {
                  this.props.playObject.release()
                }
                var whoosh = new Sound(playObject.path, Sound.MAIN_BUNDLE, (error) => {
                  if (error) {
                    console.log('failed to load the sound', error);
                    return;
                  }

                  this.props.storePlayObject(whoosh)
                  this.setState({
                    duration: whoosh.getDuration(),
                    author: playObject.author,
                    title: playObject.title,
                    songTotalTime: playObject.duration,
                    cover: playObject.cover,
                    isPlay: true
                  });

                  // Play the sound with an onEnd callback
                  this.props.playObject.play((success) => {
                    if (success) {
                      console.log('successfully finished playing');
                    } else {
                      console.log('playback failed due to audio decoding errors');
                    }
                  });
                });
              })

            }
          }
          }>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={80} width={80} borderRadius={50} convex>
              <Image
                style={{ width: 45, height: 45 }}
                source={require('../Image/Backward.png')}
              />

            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            if (this.state.isPlay) {
              this.setState({ isPlay: false }, () => { this.props.playObject.pause(); })
            }
            else {
              this.setState({ isPlay: true }, () => { this.props.playObject.play(); })

            }
          }
          } >
            <NeuView color={isDark ? '#303234' : '#99ccff'} height={80} width={80} borderRadius={50} convex>
              {this.state.isPlay ? <Image
                style={{ width: 45, height: 45 }}
                source={require('../Image/Pause.png')}
              />
                : <Image
                  style={{ width: 45, height: 45 }}
                  source={require('../Image/plybtn.png')}
                />
              }

            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            if (this.state.cureentPlayIndex + 1 !== this.props.musicArray.length) {
              this.setState({
                cureentPlayIndex: this.state.cureentPlayIndex + 1
              }, () => {
                this.props.storeCurrentINdex(this.state.cureentPlayIndex)
                const playObject = this.props.musicArray[this.state.cureentPlayIndex]
                if (this.props.playObject.release !== undefined) {
                  this.props.playObject.release()
                }
                var whoosh = new Sound(playObject.path, Sound.MAIN_BUNDLE, (error) => {
                  if (error) {
                    console.log('failed to load the sound', error);
                    return;
                  }

                  this.props.storePlayObject(whoosh)
                  this.setState({
                    duration: whoosh.getDuration(),
                    author: playObject.author,
                    title: playObject.title,
                    songTotalTime: playObject.duration,
                    cover: playObject.cover,
                    isPlay: true
                  });

                  // Play the sound with an onEnd callback
                  this.props.playObject.play((success) => {
                    if (success) {
                      console.log('successfully finished playing');
                    } else {
                      console.log('playback failed due to audio decoding errors');
                    }
                  });
                });
              })

            }
          }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={80} width={80} borderRadius={50} convex>
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
const mapStateToProps = (state) => ({
  isDark: state.mainReducer.darkMode,
  playObject: state.mainReducer.playObject,
  musicArray: state.mainReducer.musicList
})

const mapDispatchToProps = dispatch => {
  return {
    storePlayObject: (playObject) => dispatch(storePlayObject(playObject)),
    
    storeCurrentINdex: (index) => dispatch(storeCurrentPLayIndex(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)