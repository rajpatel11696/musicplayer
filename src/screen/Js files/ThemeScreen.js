import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { hp, wp } from '../../../Dimension';
import { NeuButton, NeuView } from 'react-native-neu-element';
import { RadioButton, Switch } from 'react-native-paper';
import { changeDarkMode,changePlayer } from '../../Action/ActionConteiner';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

class ThemeScreen extends Component {

    state = {
        checked: 'first',
        isSwitchOn: this.props.isDark,
    };


    render() {

        const isDark = this.props.isDark
        const { checked } = this.state;
        const { isSwitchOn } = this.state;
        return (

            <View style={{ flex: 1, backgroundColor: isDark ? '#303234' : '#e5f9ff' }}>

            <ScrollView
             contentContainerStyle={{ height: hp(100), alignItems: 'center', justifyContent: 'center', backgroundColor: isDark ? '#303234' : '#e5f9ff', paddingBottom: 20 }}
            >
                <View style={{ flexDirection: 'column', marginTop: hp(5) }}>
                    <View style={{ height: hp(35), backgroundColor: 'powderblue' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: wp(5) }}>
                            <Text style={{ fontSize: 20, color: 'gray', marginTop: hp(2), marginLeft: wp(6) }}>Normal Mode</Text>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ 
                                    checked: 'first' 
                                },()=>{
                                    this.props.changePlayer(1)
                                }); 
                            }}
                            />
                        </View>
                    
                    </View>
                    <View style={{ height: hp(35), backgroundColor: 'skyblue' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: wp(5) }}>
                            <Text style={{ fontSize: 20, color: 'gray', marginTop: hp(1), marginLeft: wp(6) }}>Pan Mode</Text>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => { 
                                    this.setState({ checked: 'second'
                                 },()=>{
                                    this.props.changePlayer(2)
                                 }); }}
                            />
                        </View>
                    </View>
                </View>
                </ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: wp(4), marginTop: hp(4) }}>
                        <Text style={{ fontSize: 20, color: 'gray',  marginLeft: wp(6) }}>Black Mode</Text>
                        <Switch
                            value={isSwitchOn}
                            onValueChange={() => {
                                this.setState({
                                    isSwitchOn: !isSwitchOn
                                }, () => {
                                    this.props.changeDarkMode(this.state.isSwitchOn)
                                }); }
                            }
                        />
                    </View>
                <View style={{ justifyContent: 'center', alignItems: 'center',marginTop: hp(5)}}>
                    <NeuButton
                        color={isDark ? '#303234' : '#eef2f9'}
                        width={wp(80)}
                        height={hp(7)}
                        borderRadius={50}
                        onPress={() => this.props.navigation.navigate("Setting")} >

                        <Text style={{ fontSize: 24, color: 'orange' }}>Apply</Text>
                    </NeuButton>
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
        changeDarkMode: (darkMode) => dispatch(changeDarkMode(darkMode)),
        changePlayer:(value)=>dispatch(changePlayer(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeScreen)