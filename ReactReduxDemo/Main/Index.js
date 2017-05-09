/*
 * @Author: 屠淋 
 * @Date: 2017-05-08 14:58:14 
 * @Last Modified by: 屠淋
 * @Last Modified time: 2017-05-08 22:38:13
 */
import React, { Component } from 'react'
import {Provider}from 'react-redux'
import consfigureStore from '../Store/ConfigureStore.js'

// import Main from './Main.js'
import NavigatorComponent from './NavigatorComponent.js'

const store = consfigureStore();

class Index extends Component {
    render() {
        return (
            <Provider store = {store}>
                <NavigatorComponent/>
            </Provider>
        )
    }
}

export default Index