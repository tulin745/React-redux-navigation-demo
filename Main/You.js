/*
 * @Author: 屠淋 
 * @Date: 2017-05-09 10:05:37 
 * @Last Modified by: 屠淋
 * @Last Modified time: 2017-05-09 10:47:14
 */
import React, { Component } from 'react'
import {View,Button}from 'react-native'
class You extends Component {
    render() {
        return (
            <View>
                <Button title='回到首页' style={{marginTop:30}} onPress={()=>{this.buttonClick()}}></Button>
            </View>
        )
    }

buttonClick(){
    const {navigate} = this.props.navigation;
    navigate('Main');
}


}

export default You