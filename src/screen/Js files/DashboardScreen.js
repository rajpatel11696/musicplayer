import React, { Component } from 'react'
import { Text, View, StatusBar, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NeuInput, NeuView } from 'react-native-neu-element';
import { hp, wp } from '../../../Dimension';
import Modal from 'react-native-modal';
import MusicFiles from 'react-native-get-music-files';
import { connect } from 'react-redux'
import { storeMusicList } from '../../Action/ActionConteiner';
import TextTicker from 'react-native-text-ticker';

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
            />}
          placeholder='Search...'
          width={350} height={50} color={this.props.isDark ? '#303234' : '#eef2f9'} borderRadius={50}
        />
      </View>

    </View>

  );

  renderItem = ({ item, index }) => (

    item.title !== null && <View style={{ width: wp(90), flexDirection: 'row', padding: wp(3), alignItems: 'center', justifyContent: 'space-between', backgroundColor: this.props.isDark ? '#303234' : '#e5f9ff' }}>
      <View style={{ width: wp(75), flexDirection: 'column' }}>
        <Text style={{ color: 'gray', fontSize: 18 }}>{item.title}</Text>
        <Text style={{ color: 'gray', fontSize: 13 }}>{item.author}</Text>
      </View>
      <TouchableOpacity

        onPress={() => this.onPlayBtn(item, index)}>
        <Image
          source={require('../Image/PlayIcon.png')}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>

    </View>
  );

  componentDidMount() {
    MusicFiles.getAll({
      id: true, // get id
      artist: true, // get artist
      duration: true, // get duration
      album: true,
      genre: true, // get genre
      title: true, // get title
      fileName: true, // get file name
      cover: true,
      blured: true,
      minimumSongDuration: 1000 // get track has min duration is 1000 ms (or 1s)
    }).then(tracks => {
      console.log(JSON.stringify(tracks));
      this.props.storeMusicList(tracks)
      this.setState({
        musicArray: tracks,
        isDataload: true
      })
    }).catch(error => {

    })
  }
  onPlayBtn = (item, index) => {
    this.setState({ isModalVisible: !this.state.isModalVisible }, () => {
      if (this.props.playObject.release !== undefined) {
        this.props.playObject.release()
      }
      if (this.props.selectedPlayer === 0) {
        setTimeout(() => {
          this.props.navigation.navigate("Home", {
            data: item,
            index: index
          });
        }, 600)

      } else if (this.props.selectedPlayer === 1) {
        this.props.navigation.navigate("PlayerUi", {
          data: item,
          index: index
        });
      } else {

      }
    });
  }
  showModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const isDark = this.props.isDark

    return (

      <ScrollView
        contentContainerStyle={{ height: hp(100), alignItems: 'center', justifyContent: 'center', backgroundColor: isDark ? '#303234' : '#e5f9ff', paddingBottom: 20 }}>
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
{/* ------------------------------------------------------------------------------------------------------------ */}
     
        <View style={{ alignItems: 'center', marginTop: hp(7), justifyContent: "center" }}>
        <NeuView color={isDark ? '#303234' : '#eef2f9'} height={hp(10)} width={wp(94)} borderRadius={20} inset>
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
        </NeuView>
      </View>



        <View style={{ marginTop: 40, alignSelf: 'flex-start', marginLeft: 20 }}>
          <Text style={{ fontSize: 24, color: 'gray', fontWeight: '200' }}>Artists</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ maxHeight: 200, marginTop: hp(3) }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Artist")} style={{ marginHorizontal: 15, height: 200 }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={120} width={120} borderRadius={60} inset style={{ marginTop: 5 }}>
              <Image
                style={{ width: 110, height: 110, }}
                source={require('../Image/Darshan.jpg')}
                borderRadius={55} />
            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15, height: 200 }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={120} width={120} borderRadius={60} inset style={{ marginTop: 5 }}>
              <Image
                style={{ width: 110, height: 110, }}
                source={require('../Image/Arijit.jpg')}
                borderRadius={55} />
            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15, height: 200 }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={120} width={120} borderRadius={60} inset style={{ marginTop: 5 }}>
              <Image
                style={{ width: 110, height: 110, }}
                source={require('../Image/Neha.jpg')}
                borderRadius={55} />
            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15, height: 200 }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={120} width={120} borderRadius={60} inset style={{ marginTop: 5 }}>
              <Image
                style={{ width: 110, height: 110, }}
                source={require('../Image/Tony.jpg')}
                borderRadius={55} />
            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15, height: 200 }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={120} width={120} borderRadius={60} inset style={{ marginTop: 5 }}>
              <Image
                style={{ width: 110, height: 110, }}
                source={require('../Image/Sunidhi.jpg')}
                borderRadius={55} />
            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15, height: 200 }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={120} width={120} borderRadius={60} inset style={{ marginTop: 5 }}>
              <Image
                style={{ width: 110, height: 110, }}
                source={require('../Image/Atif.jpg')}
                borderRadius={55} />
            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15, height: 200 }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={120} width={120} borderRadius={60} inset style={{ marginTop: 5 }}>
              <Image
                style={{ width: 110, height: 110, }}
                source={require('../Image/Sonu.jpg')}
                borderRadius={55} />
            </NeuView>
        
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15, height: 200 }}>
            <NeuView color={isDark ? '#303234' : '#eef2f9'} height={120} width={120} borderRadius={60} inset style={{ marginTop: 5 }}>
              <Image
                style={{ width: 110, height: 110, }}
                source={require('../Image/Shreya.jpg')}
                borderRadius={55} />
            </NeuView>
          </TouchableOpacity>

        </ScrollView>
       
        {/* ---------------------------------------------------------------------------------------- */}

        <View>
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
          <TouchableOpacity onPress={() => {
            var resArr = [];
            this.state.musicArray.filter(function (item) {
              var i = resArr.findIndex(x => (x.album == item.album && x.cover == item.cover));
              if (i <= -1) {
                resArr.push({
                  album: item.album,
                  cover: item.cover
                });
              }
              return null;
            });
            this.props.navigation.navigate("AlbumScreen", { albumList: resArr })
            console.log("AlmubList" + JSON.stringify(resArr))
          }}>
            
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
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Demo")} >
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
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  isDark: state.mainReducer.darkMode,
  playObject: state.mainReducer.playObject,
  selectedPlayer: state.mainReducer.selectedplayer,
  currentPlayIndex: state.mainReducer.cureentPlayIndex,
  musicList: state.mainReducer.musicList
})

const mapDispatchToProps = dispatch => {
  return {
    storeMusicList: (musics) => dispatch(storeMusicList(musics))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)
