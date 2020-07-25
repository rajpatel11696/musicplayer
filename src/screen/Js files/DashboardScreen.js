import React, { Component } from 'react'
import { Text, View, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import { NeuInput, NeuView } from 'react-native-neu-element';
import ViewPager from '@react-native-community/viewpager';

export default class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center',justifyContent:'center', backgroundColor: '#e5f9ff' }}>

        <StatusBar hidden={true} />
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
          <NeuInput
            prefix={
              <Image
                source={require('../Image/Search_btn.png')}
                style={{ width: 30, height: 30 }}
              />
            }
            placeholder='Search...'
            width={350} height={60} color='#eef2f9' borderRadius={50}
          />
        </View>

        {/* --------------------------------------------------------------------------------------------- */}

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{maxHeight:200,marginTop:30}}>
          <TouchableOpacity style={{marginHorizontal:15,height:200}}>
            <NeuView color='#eef2f9' height={170} width={130} borderRadius={20} convex>
              <Image
                style={{ width: 125, height: 160, }}
                source={require('../Image/bolly.jpg')}
                borderRadius={20}
              />
            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:15,height:200}}>
            <NeuView color='#eef2f9' height={170} width={130} borderRadius={20} convex>
              <Image
                style={{ width: 125, height: 160, }}
                source={require('../Image/old.jpg')}
                borderRadius={20}
              />
            </NeuView>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:15,height:200}}>
            <NeuView color='#eef2f9' height={170} width={130} borderRadius={20} convex>
              <Image
                style={{ width: 125, height: 160, }}
                source={require('../Image/ppl.jpg')}
                borderRadius={20}
              />
            </NeuView>
          </TouchableOpacity>
        </ScrollView>
        {/* ----------------------------------------------------------------- */}

        <View style={{ marginTop: 60 }}>
          <TouchableOpacity>
            <NeuView color='#eef2f9' height={60} width={350} borderRadius={10} >
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                <Image
                  style={{ width: 35, height: 35, }}
                  source={require('../Image/album.png')}
                  borderRadius={20}
                />
                <Text style={{ fontSize: 20, padding: 10 }}>Albums</Text>
              </View>
            </NeuView>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 25 }}>
          <TouchableOpacity>
            <NeuView color='#eef2f9' height={60} width={350} borderRadius={10} >
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                <Image
                  style={{ width: 35, height: 35, }}
                  source={require('../Image/artist.png')}
                  borderRadius={20}
                />
                <Text style={{ fontSize: 20, padding: 10 }}>Artists</Text>
              </View>
            </NeuView>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 25 }}>
          <TouchableOpacity>
            <NeuView color='#eef2f9' height={60} width={350} borderRadius={10} >

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                <Image
                  style={{ width: 35, height: 35, }}
                  source={require('../Image/fav.png')}
                  borderRadius={20}
                />
                <Text style={{ fontSize: 20, padding: 10 }}>Favorites</Text>
              </View>

            </NeuView>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
