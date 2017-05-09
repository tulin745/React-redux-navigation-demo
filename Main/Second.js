/*
 * @Author: 屠淋 
 * @Date: 2017-05-08 22:24:07 
 * @Last Modified by: 屠淋
 * @Last Modified time: 2017-05-09 10:46:45
 */

import React, { Component } from 'react'

import {connect}from 'react-redux'

import {
    View,
    TextInput,
    Text,
    Button
} from 'react-native'

import *as ActionsDemo from '../Actions/ActionsDemo.js'

class Second extends Component {
    
    buttonClick() {

        this.props.navigation.goBack();
        this.props.showRootViewAction(this.props.ReducerDemo.inputText);
    }
    render() {
        return (
            <View>
                <Text style = {{marginTop:20,marginLeft:20,color:'red'}}>{this.props.navigation.state.params.MainText}</Text>
                <TextInput placeholder='请输入数据' 
                style={{marginLeft:20,width:400,height:50}}
                onChangeText={(text)=>{
                    
                    this.props.saveInputText(text);

                }}></TextInput>
                <Button title='保存' onPress={() => { this.buttonClick() } } />
            </View>
        )
    }
}

export default connect((state) => {
    const {ReducerDemo} = state; // => var ReducerDemo = state.ReducerDemo;调用rootReducers中声明的reducer
    return {
        ReducerDemo // 1.相当于返回ReducerDemo:ReducerDemo，当key和value相同时，可省略key ==> es6（即可通过this.props.Main获取state中的状态值）
    }
}, ActionsDemo)(Second)