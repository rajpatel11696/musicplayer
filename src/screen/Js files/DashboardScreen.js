import React, { Component } from 'react'
import { Text, View, StatusBar, Image, TouchableOpacity, ScrollView, Button, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NeuInput, NeuView } from 'react-native-neu-element';
import { hp, wp } from '../../../Dimension';
import Modal from 'react-native-modal';
import MusicFiles from 'react-native-get-music-files';
import RBSheet from "react-native-raw-bottom-sheet";
import { connect } from 'react-redux'
import { storeMusicList } from '../../Action/ActionConteiner';

class DashboardScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {

      isModalVisible: false,
      isDataload: false,
      musicArray: []
    };
  }
  renderHeaderItem = () => (
    <View
      style={{ width: wp(90), padding: wp(3), alignItems: 'center', justifyContent: 'center', backgroundColor: this.props.isDark ? '#303234' : '#e5f9ff' }}>
      <Text style={{ fontSize: 26, color: 'gray' }}>All Songs</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <NeuInput
          prefix={
            <Image
              source={require('../Image/Search_btn.png')}
              style={{ width: 30, height: 30 }}
            />
          }
          placeholder='Search...'
          width={350} height={50} color={this.props.isDark ? '#303234' : '#eef2f9'} borderRadius={50}
        />
      </View>

    </View>

  );

  renderItem = ({ item }) => (

    item.title !== null && <View style={{ width: wp(90), flexDirection: 'row', padding: wp(3), alignItems: 'center', justifyContent: 'space-between', backgroundColor: this.props.isDark ? '#303234' : '#e5f9ff' }}>
      <View style={{ width: wp(75), flexDirection: 'column' }}>
        <Text style={{ color: 'gray', fontSize: 18 }}>{item.title}</Text>
        <Text style={{ color: 'gray', fontSize: 13 }}>{item.author}</Text>
      </View>
      <TouchableOpacity

        onPress={() => this.onPlayBtn(item)}>
        <Image
          source={require('../Image/PlayIcon.png')}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>

    </View>
  );

  componentDidMount() {
    console.log("Reduxx>>>" + this.props.isDark)
    MusicFiles.getAll({
      id: true, // get id
      artist: true, // get artist
      duration: true, // get duration
      album: true,
      genre: true, // get genre
      title: true, // get title
      fileName: true, // get file name
      minimumSongDuration: 1000 // get track has min duration is 1000 ms (or 1s)
    }).then(tracks => {
      // const filterData = tracks.filter((item) => item.genre === 'Technology')
      console.log(JSON.stringify(tracks));
      this.setState({
        musicArray: tracks,
        isDataload: true
      })
    }).catch(error => {

    })
  }

  onPlayBtn = (item) => {
    this.setState({ isModalVisible: !this.state.isModalVisible }, () => {
      this.props.navigation.navigate("Home", { data: item });

    });

  }
  showModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const isDark = this.props.isDark

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: isDark ? '#303234' : '#e5f9ff' }}>

        <StatusBar hidden={true} />

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <NeuInput
            prefix={
              <Image
                source={require('../Image/Search_btn.png')}
                style={{ width: 30, height: 30 }}
              />
            }
            placeholder='Search...'
            width={350} height={50} color={isDark ? '#303234' : '#eef2f9'} borderRadius={50}
          />
        </View>

        {/* --------------------------------------------------------------------------------------------- */}
        <View style={{ marginTop: 30, alignSelf: 'flex-start', marginLeft: 20 }}>
          <Text style={{ fontSize: 24, color: 'gray', fontWeight: '200' }}>Moods & Collections</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ maxHeight: 200, marginTop: hp(2) }}>
          <TouchableOpacity style={{ marginHorizontal: 15, height: 200 }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={170} width={130} borderRadius={20} convex>
              <Image
                style={{ width: 125, height: 160, }}
                source={require('../Image/bolly.jpg')}
                borderRadius={20}
              />
            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15, height: 200 }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={170} width={130} borderRadius={20} convex>
              <Image
                style={{ width: 125, height: 160, }}
                source={require('../Image/old.jpg')}
                borderRadius={20}
              />
            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15, height: 200 }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={170} width={130} borderRadius={20} convex>
              <Image
                style={{ width: 125, height: 160, }}
                source={require('../Image/ppl.jpg')}
                borderRadius={20}
              />
            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15, height: 200 }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={170} width={130} borderRadius={20} convex>
              <Image
                style={{ width: 125, height: 160, }}
                source={require('../Image/bolly.jpg')}
                borderRadius={20}
              />
            </NeuView>
          </TouchableOpacity>
        </ScrollView>
        {/* ----------------------------------------------------------------- */}

        <View style={{ marginTop: hp(2) }}>
          <TouchableOpacity onPress={this.showModal}>
            <Modal isVisible={this.state.isModalVisible}
              animationIn={'slideInUp'}
              animationOut={'slideOutDown'}
              animationInTiming={1000}
              animationOutTiming={1000}
              hideModalContentWhileAnimating={true}
              backdropTransitionInTiming={800}
              backdropTransitionOutTiming={1000}
              onBackButtonPress={this.showModal}
              onBackdropPress={this.showModal}

              style={{ width: '100%', height: '70%', alignSelf: 'center' }}
            >
              <View style={{ maxHeight: hp(90), justifyContent: 'flex-end', marginTop: hp(12), marginBottom: -20, alignItems: 'center', backgroundColor: isDark ? '#303234' : '#e5f9ff', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <TouchableOpacity onPress={this.showModal}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: isDark ? '#303234' : '#e5f9ff', width: 60, height: 60, borderRadius: 50, marginTop: -30, zIndex: 1 }}>
                    {isDark ? <Image
                      style={{ width: 45, height: 45 }}
                      source={require('../Image/close_dark.png')}
                    />
                      : <Image
                        style={{ width: 45, height: 45 }}
                        source={require('../Image/close.png')}
                      />
                    }

                  </View>
                </TouchableOpacity>
                {this.state.isDataload ? <FlatList
                  data={this.state.musicArray}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.id}
                  ListHeaderComponent={this.renderHeaderItem}
                /> : <ActivityIndicator size={'large'} color={'gray'}></ActivityIndicator>
                }
              </View>
            </Modal>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={hp(7)} width={wp(90)} borderRadius={10}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                <Image
                  style={{ width: 35, height: 35, }}
                  source={require('../Image/album.png')}
                  borderRadius={20}
                />
                <Text style={{ fontSize: 20, padding: 10, color: 'gray' }}>All Songs</Text>
              </View>
            </NeuView>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={hp(7)} width={wp(90)} borderRadius={10} >
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                <Image
                  style={{ width: 35, height: 35, }}
                  source={require('../Image/artist.png')}
                  borderRadius={20}
                />
                <Text style={{ fontSize: 20, padding: 10, color: 'gray' }}>Albums</Text>
              </View>
            </NeuView>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={hp(7)} width={wp(90)} borderRadius={10} >

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                <Image
                  style={{ width: 35, height: 35, }}
                  source={require('../Image/fav.png')}
                  borderRadius={20}
                />
                <Text style={{ fontSize: 20, padding: 10, color: 'gray' }}>Favorites</Text>
              </View>
            </NeuView>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Setting")}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={hp(7)} width={wp(90)} borderRadius={10} >

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                <Image
                  style={{ width: 35, height: 35, }}
                  source={require('../Image/setting.png')}
                  borderRadius={20}
                />
                <Text style={{ fontSize: 20, padding: 10, color: 'gray' }}>Settings</Text>
              </View>
            </NeuView>
          </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)
