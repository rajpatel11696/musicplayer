import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Content, Accordion } from "native-base";
import { connect } from 'react-redux'
import { storeMusicList } from '../../Action/ActionConteiner';



const dataArray = [
    { title: "Is Musique free?", content: "Yes, Musique is completely free for listnening to music from a base of over the songs in your mobile. You just need to open the app and enjoy your favorite songs." },
    { title: "Do I need the internet to use Musique?", content: "No, You don't need to have an internet. You can listen to songs even without an internet." },
    { title: "How can I change app theame?", content: "Open the Musique app. Tap on -DISPLAY SETTINGS- from Dashboard. select the preference option and select the mode you wish to show your app in and tap on apply changes button." },
    { title: "Can I change my profile name?", content: "You can not edit or change your profile name once you signup with that name." },
    { title: "How do I logout from the app?", content: "We do not recommend our users to logut so that they can keep enjoying the saved music but in case still need to do it then please try the below steps :- Open Musique app. Tap on the settings at the bottom and scroll down to end to get the LOGOUT option." },
    { title: "How to reedem coupon?", content: "Sorry, currently  our team is working on the feature. So this feature is not available for sometime." },
    { title: "Is there any timer?", content: "Hey, Yes there is timer feature available in Musique. It's very unique feature and user can set timer so they can enjoy there work. This will enable the timer and stop music when the timer ends. Now oncee the timer ends the application will automatically stop playing" },
    { title: "Is this beta version of app?", content: "Yes, Application is still in developing phase as there are so many feature which is currently not available. Our team is working hard to making application user freinds and also enhance your experinece ins better way." }

];

class FaQScreen extends Component {
    render() {
        const isDark = this.props.isDark

        return (
                <Container style={{ flex: 1, backgroundColor: isDark? '#303234': '#e5f9ff' }}>
                    <Header />
                    <Content padder>
                        <Accordion dataArray={dataArray} icon="add"
                            expandedIcon="remove"
                            headerStyle={{ backgroundColor:  isDark? '#27282a': '#ccf3ff' }}
                            contentStyle={{ backgroundColor:  isDark? '#303234': '#e5f9ff' }}
                        />
                    </Content>
                </Container>
        )
    }
}
const mapStateToProps = (state) => ({
    isDark:state.mainReducer.darkMode
  })
  
  const mapDispatchToProps = dispatch=>{
    return{
        storeMusicList:(musics)=>dispatch(storeMusicList(darkMode))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(FaQScreen)