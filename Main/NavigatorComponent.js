/*
 * @Author: 屠淋 
 * @Date: 2017-05-08 22:21:33 
 * @Last Modified by: 屠淋
 * @Last Modified time: 2017-05-09 10:43:29
 */
import React from 'react'
import {StackNavigator,DrawerNavigator,addNavigationHelpers,TabNavigator}from 'react-navigation';
import {connect}from 'react-redux'

import Main from './Main.js'
import Second from './Second.js'
import Home from './Home.js'
import You from './You.js'

const tabNavigator = new TabNavigator({
    Main:{
        screen:Main
    },
    You:{
        screen:You
    }
    
});

export const MainNavigator = new StackNavigator({
    Home:{
        screen:tabNavigator
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