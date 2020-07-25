import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import LottieView from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Simple = () => (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fe6e58',
          image: <LottieView source={require('../Json FIle/Music.json')}
          style={{width: 60, height:220}}
          
          autoPlay loop 
          
          />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fe6e58',
          image: <LottieView source={require('../Json FIle/Satis.json')}
          style={{width: 60, height:220}}
          
          autoPlay loop />,
          title: 'The Title',
          subtitle: 'This is the subtitle that sumplements the title.',
        },
        {
          backgroundColor: '#e8f3f8',
          image:  <LottieView source={require('../Json FIle/Smile.json')}
          style={{width: 60, height:220}}
          
          autoPlay loop />,
          title: 'Triangle',
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  );

export default class componentName extends Component {
  render() {
    return (
        
        <Simple />
    )
  }
}