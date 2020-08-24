import React, { Component } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity, Slider } from 'react-native';
import { NeuView } from 'react-native-neu-element';
import Animated, { Easing } from 'react-native-reanimated';
import { hp, wp } from '../../../Dimension';
import Sound from 'react-native-sound';
import { connect } from 'react-redux'
import { storeMusicList } from '../../Action/ActionConteiner';
import TextTicker from 'react-native-text-ticker';

const { Value, Clock, concat } = Animated;

class PlayerScreen extends Component {
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
        songTotalTime: 0,
        isFav: true,

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

        this.state.whoosh.setCurrentTime(value);
        this.setState({ playSeconds: value });
    }
    FavActive = () => {
        this.setState({ isFav: !this.state.isFav });
    };

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
                            {this.state.title}
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
                            {this.state.author}
                        </TextTicker>

                    </View>
                </View>
                <View style={{ marginTop: hp(4), flexDirection: 'row', marginLeft: wp(10) }}>
                    <View>
                        <NeuView color={isDark ? '#303234' : '#eef2f9'} height={450} width={60} borderRadius={100} convex>
                            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={450} width={60} borderRadius={100} inset>
                                <View style={{ flexDirection: 'column', }}>

                                    <TouchableOpacity onPress={() => {
                                        if (this.state.isPlay) {
                                            this.setState({ isPlay: false }, () => { this.props.playObject.pause(); })
                                        }
                                        else {
                                            this.setState({ isPlay: true }, () => { this.props.playObject.play(); })

                                        }
                                    }
                                    } >

                                        {this.state.isPlay ? <Image
                                            style={{ width: 45, height: 45 }}
                                            source={require('../Image/Pause_new.png')}
                                        />
                                            : <Image
                                                style={{ width: 45, height: 45 }}
                                                source={require('../Image/playbutton.png')}
                                            />
                                        }
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        if (this.state.cureentPlayIndex + 1 !== this.props.musicArray.length) {
                                            this.setState({
                                                cureentPlayIndex: this.state.cureentPlayIndex + 1
                                            }, () => {
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
                                                        cover: playObject.cover
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
                                    }}
                                    >
                                        <Image
                                            style={{ width: 50, height: 60, marginTop: hp(5) }}
                                            source={require('../Image/next_new.png')}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        if (this.state.cureentPlayIndex !== 0) {
                                            this.setState({
                                                cureentPlayIndex: this.state.cureentPlayIndex - 1
                                            }, () => {
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
                                                        cover: playObject.cover
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
    isDark: state.mainReducer.darkMode,
    playObject: state.mainReducer.playObject,
    musicArray: state.mainReducer.musicList
})

const mapDispatchToProps = dispatch => {
    return {
        storePlayObject: (playObject) => dispatch(storePlayObject(playObject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerScreen)