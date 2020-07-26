import React, { Component } from 'react'
import { NeuView, NeuProgressBar, NeuInput, NeuButton } from 'react-native-neu-element';
import { Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import { wp, hp } from '../../../Dimension';


export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
      }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5f9ff' }}>
                <StatusBar hidden={true} />

                <View style={{ justifyContent: 'center', alignItems: 'center', zIndex: 1}}>
                    <NeuView color='#eef2f9' height={hp(12)} width={wp(24)} borderRadius={100} convex>
                        <Image
                            style={{ width: wp(22), height: hp(13) }}
                            source={require('../Image/Musiclogo.png')}
                        />
                    </NeuView>
                </View>
                <View style={{marginTop:hp(-12)}}>
                    <Image
                        source={require('../Image/TreeSignUp.jpg')}
                        style={{ width: wp(92), height: hp(35), marginLeft: wp(1) }}>

                    </Image>
                </View>
                <View style={{ alignSelf: 'flex-start',marginLeft: wp(7),marginTop: hp(-1.5) }}>
                    <Text style={{ fontSize: 32, color: '#595959' }}>Welcome</Text>
                    <Text style={{ fontSize: 22, color: '#808080' }}>Let's get started</Text>

                </View>



                <View style={{ padding: 10, marginTop: 10 }}>
                    <NeuInput

                        prefix={
                            <Image
                                source={require('../Image/user.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        }
                        value={this.state.username}
                        onChangeText={(username) => this.setState({ username })}
                        placeholder='Your Email here' width={wp(90)} height={hp(7.5)} color='#eef2f9' borderRadius={50}></NeuInput>
                </View>
                <View style={{ padding: 7 }}>

                    <NeuInput
                        prefix={
                            <Image
                                source={require('../Image/Pass.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        }
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry={true}
                        placeholder='Your password here' width={wp(90)} height={hp(7.5)} color='#eef2f9' borderRadius={50}></NeuInput>
                </View>
                <TouchableOpacity>
                    <View style={{ padding: 7 }}>
                        <Text 
                        onPress={()=> this.props.navigation.navigate("Lock")}
                        style={{ fontSize: 22, color: '#808080', textDecorationLine: 'underline' }}>Forgot Password?</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 25, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    
                        <NeuButton
                            color="#eef2f9"
                            width={wp(35)}
                            height={hp(7)}
                            borderRadius={50}
                            onPress={()=> this.props.navigation.navigate("Dashboard")}
                        >
                            <Text style={{ fontSize: 24, color: '#808080' }}>Sign-in</Text>
                        </NeuButton>
                    
                </View>
                <TouchableOpacity>
                    <View style={{ padding: 15 }}>
                        <Text 
                        onPress={()=> this.props.navigation.navigate("Signup")}
                        style={{ fontSize: 22, color: '#808080', textDecorationLine: 'underline' }}>Create An Account</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
