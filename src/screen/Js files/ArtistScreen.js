import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StatusBar ,Dimensions, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { storeMusicList } from '../../Action/ActionConteiner';
import { NeuInput, NeuView } from 'react-native-neu-element';
import { hp, wp } from '../../../Dimension';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { opacity } from 'react-native-redash';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
 
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
 
const renderNavBar = () => (
  <View style={styles.navContainer}>
    <View style={styles.statusBar} />
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
        <Image 
        source={require('../Image/Back_Arrow.png')}
        style={{width: 45, height: 45}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
      <Image 
        source={require('../Image/info.png')}
        style={{width: 35, height: 35}}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const renderContent = () => {
  return (
    <View style={styles.body}>
      {Array.from(Array(30).keys()).map((i) => (
        <View
          key={i}
          style={{padding: 15, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Item {i + 1}</Text>
        </View>
      ))}
    </View>
  );
};
 
const title = () => {
  return (
    <View style={styles.body}>
      <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>Darshan Raval</Text>
      
    </View>
  );
};
 
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ReactNativeParallaxHeader
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={350}
        extraScrollHeight={20}
        navbarColor="#c3f3ff"
        titleStyle={styles.titleStyle}
        title={title()}
        backgroundImage={require('../Image/Atif.jpg')}
        backgroundImageScale={2.2}
        renderNavBar={renderNavBar}
        renderContent={renderContent}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        scrollViewProps={{
          onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
          onScrollEndDrag: () => console.log('onScrollEndDrag'),
        }}
      />
    </>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: '#e5f9ff',
    

  },
 
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 15,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent'
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: '#171818',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
 
export default App;
