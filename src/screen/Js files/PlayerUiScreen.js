import React, { Component } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity, Slider } from 'react-native';
import { NeuView } from 'react-native-neu-element';
import Animated, { Easing } from 'react-native-reanimated';
import { hp, wp } from '../../../Dimension';
import Sound from 'react-native-sound';
import { connect } from 'react-redux'
import { storeMusicList, storePlayObject } from '../../Action/ActionConteiner';
import TextTicker from 'react-native-text-ticker'

const { Value, Clock, concat } = Animated;


class PlayerUiScreen extends Component {

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
                <View style={{ flexDirection: 'row', zIndex: 1, justifyContent: 'space-between', marginHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")}>

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
                                {this.state.title}
                            </TextTicker>
                            <TextTicker
                                style={{ fontSize: 18, color: 'gray', marginTop: hp(.5), width: wp(45) }}
                                duration={9000}
                                loop
                                bounce
                                repeatSpacer={50}
                                marqueeDelay={5000}
                            >
                                {this.state.author}
                            </TextTicker>
                            {/* <Text style={{ marginTop: hp(.5), color: 'gray', fontSize: 18 }}>Ft. John doe</Text> */}
                        </View>
                    </NeuView>

                </View>
                {/* <Slider

                    onValueChange={this.onSliderEditing}
                    style={{ marginLeft: wp(5), width: wp(85) }}
                    maximumValue={this.state.duration}
                    minimumTrackTintColor="#8AAAFF"
                    maximumTrackTintColor="#DAE6F4"
                    value={this.state.playSeconds}
                    thumbTintColor="#7B9BFF" />
 */}


                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp(8) }}>
                    <Text style={{ color: 'gray', fontSize: 18 }}>{this.SectoMin(this.state.songTotalTime)}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: hp(5), justifyContent: "center" }}>
                    <NeuView color={isDark ? '#303234' : '#eef2f9'} height={hp(7)} width={wp(65)} borderRadius={50} convex>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>

                            <View>
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
                                        style={{ width: 45, height: 45, position: 'relative', marginLeft: wp(4.5) }}
                                        source={require('../Image/Backward.png')}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View style={{ marginLeft: wp(5) }}>
                                <NeuView color={isDark ? '#303234' : '#eef2f9'} height={90} width={90} borderRadius={45} convex>
                                    <TouchableOpacity onPress={() => {
                                        if (this.state.isPlay) {
                                            this.setState({ isPlay: false }, () => { this.props.playObject.pause(); })
                                        }
                                        else {
                                            this.setState({ isPlay: true }, () => { this.props.playObject.play(); })

                                        }
                                    }
                                    } >
                                        <NeuView color={isDark ? '#303234' : '#eef2f9'} height={70} width={70} borderRadius={35} convex>
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
                                </NeuView>
                            </View>
                            <View style={{ marginLeft: wp(5), marginRight: wp(4) }}>
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
                                }}>
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
    isDark: state.mainReducer.darkMode,
    playObject: state.mainReducer.playObject,
    musicArray: state.mainReducer.musicList
})

const mapDispatchToProps = dispatch => {
    return {
        storePlayObject: (playObject) => dispatch(storePlayObject(playObject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerUiScreen)