import React, { Component } from 'react'
import { Text, View, StatusBar, TouchableOpacity, Image } from 'react-native'
import { NeuView, NeuProgressBar, NeuInput, NeuButton } from 'react-native-neu-element';
import { RadioButton } from 'react-native-paper';
import { wp, hp } from '../../../Dimension';

export default class CreateAccScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }
    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            return false;
        }
        else {
            return true;
        }
    }
    getSignupFromApi = () => {
        return fetch('https://reqres.in/api/register', {

            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password
            })
        })

            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));
                if(json.id !== undefined && json.id !== null){

                    this.props.navigation.navigate('Dashboard')
                }
                else{
                    alert(json.error)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
    render() {
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5f9ff' }}>
                <StatusBar hidden={true} />

                <View style={{ justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                    <NeuView color='#eef2f9' height={hp(12)} width={wp(24)} borderRadius={100} convex>
                        <Image
                            style={{ width: wp(21), height: hp(13) }}
                            source={require('../Image/Musiclogo.png')}
                        />
                    </NeuView>
                </View>

                <View style={{ marginTop: hp(-13) }}>
                    <Image

                        source={require('../Image/TreeSignUp.jpg')}
                        style={{ width: wp(92), height: hp(35) }}
                    >

                    </Image>
                </View>
                <View style={{ alignSelf: 'flex-start', marginLeft: wp(7), marginTop: hp(-1.5) }}>
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
                        onChangeText={(value) => this.setState({ username: value })}
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
                        onChangeText={(value) => this.setState({ password: value })}
                        placeholder='Your password here' width={wp(90)} height={hp(7.5)} color='#eef2f9' borderRadius={50}></NeuInput>
                </View>
                <TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginLeft: -20 }}>
                        <RadioButton
                            value="first"
                            onPress={() => setChecked('first')}
                        />
                        <Text style={{ fontSize: 18, color: '#808080' }}>I agree to all </Text>
                        <Text style={{ fontSize: 18, color: '#808080', textDecorationLine: 'underline' }}>terms and conditions</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <NeuButton
                            color="#eef2f9"
                            width={wp(50)}
                            height={hp(7)}
                            borderRadius={50}
                        >
                            <Text
                                onPress={() => {
                                    if (this.validate(this.state.username) && this.state.password !== '') {
                                        this.getSignupFromApi()
                                    }
                                    else {
                                        alert('please enter valid username and password')

                                    }

                                }}
                                style={{ fontSize: 22, color: '#808080' }}>Create Account</Text>
                        </NeuButton>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={{ marginTop: 14 }}>
                        <Text
                            onPress={() => this.props.navigation.navigate("Login")}
                            style={{ fontSize: 22, color: '#808080', textDecorationLine: 'underline' }}>Sign-in Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }
}