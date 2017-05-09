/*
 * @Author: 屠淋 
 * @Date: 2017-05-08 14:42:31 
 * @Last Modified by: 屠淋
 * @Last Modified time: 2017-05-09 00:18:16
 */

import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';
import * as ActionsDemo from '../Actions/ActionsDemo.js'
import { connect } from 'react-redux';
import ReducerDemo from '../Reducers/ReducerDemo.js'

import {NavigationActions}from 'react-navigation'

class Main extends Component {

    buttonClick() {
        this.props.showMessageAction();
    }
    footButtonClick() {

        this.props.showRootViewAction();

    }
    navigationPush() {
        
        this.props.navigation.navigate('Second',{MainText:'我是首页传过来的数据'});
    }
    render() {
        return (
            <View >
                <Text style={{ marginTop: 20 }}>{this.props.ReducerDemo.text}</Text>
                <Button title='点击改变默认值' onPress={() => { this.buttonClick() } } />
                <Button title='跳转到二级页面' onPress={() => { this.navigationPush() } } />
                <Text>{this.props.ReducerDemo.rootText}</Text>
            </View>
        )
    }
}


/**
 * 将state,action绑定到props
 */
export default connect((state) => {
    const {ReducerDemo} = state; // => var ReducerDemo = state.ReducerDemo;调用rootReducers中声明的reducer
    return {
        ReducerDemo // 1.相当于返回ReducerDemo:ReducerDemo，当key和value相同时，可省略key ==> es6（即可通过this.props.Main获取state中的状态值）
    }
}, ActionsDemo // 2.注入action,即可调用action中声明的方法,（即可通过this.props.showMessage获取,用于调用showMessage方法）
)(Main) // 3.将组件注入
