/*
 * @Author: 屠淋 
 * @Date: 2017-05-08 22:21:33 
 * @Last Modified by: 屠淋
 * @Last Modified time: 2017-05-08 23:54:55
 */
import React from 'react'
import {StackNavigator,addNavigationHelpers}from 'react-navigation';
import {connect}from 'react-redux'

import Main from './Main.js'
import Second from './Second.js'

export const MainNavigator = new StackNavigator({
    Main:{
        screen:Main
    },
    Second:{
        screen:Second
    }
});

const MainWithNavigationState = ({dispatch,nav})=>(
    <MainNavigator navigation={addNavigationHelpers({dispatch,state:nav})}/>
);

export default connect((state)=>{
    return {
        nav:state.nav
    }
})(MainWithNavigationState);