/*
 * @Author: 屠淋 
 * @Date: 2017-05-09 10:05:37 
 * @Last Modified by: 屠淋
 * @Last Modified time: 2017-05-09 10:07:50
 */
import React, { Component } from 'react'
import {View,Button}from 'react-native'
class Home extends Component {
    render() {
        return (
            <View>
                <Button style={{marginTop:30}} onPress={()=>{this.buttonClick()}}>我是首页</Button>
            </View>
        )
    }

buttonClick(){
    const {navigate} = this.props.navigation;
    navigate('Main');
}


}

export default Home