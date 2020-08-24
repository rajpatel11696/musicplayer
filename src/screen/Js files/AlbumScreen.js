import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity,Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { wp } from '../../../Dimension'

class AlbumScreen extends Component {
  static propTypes = {
    prop: PropTypes
  }

  renderItem = ({ item, index }) => (

    item.title !== null && <View style={{ width: wp(90), flexDirection: 'row', padding: wp(3), alignItems: 'center', justifyContent: 'space-between', backgroundColor: this.props.isDark ? '#303234' : '#e5f9ff' }}>
      <View style={{ width: wp(75), flexDirection: 'column' }}>
        <Text style={{ color: 'gray', fontSize: 18 }}>{item.album}</Text>
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

  render() {
    return (
      <View>
       <FlatList
                  data={this.props.route.params.albumList}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.id}
                />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    isDark: state.mainReducer.darkMode,
  })
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AlbumScreen)
