/*
 * @Author: 屠淋 
 * @Date: 2017-05-08 14:26:47 
 * @Last Modified by: 屠淋
 * @Last Modified time: 2017-05-08 23:50:31
 */

'use strict';
import {combineReducers}from 'redux'
import ReducerDemo from './ReducerDemo.js'


import { MainNavigator } from '../Main/NavigatorComponent.js';

// // Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = MainNavigator.router.getActionForPathAndParams('Main');
// const tempNavState = MainNavigator.router.getStateForAction(firstAction);
// const secondAction = MainNavigator.router.getActionForPathAndParams('Login');
// const initialNavState = MainNavigator.router.getStateForAction(secondAction, tempNavState);

function nav(state, action) {
  let nextState;
  switch (action.type) {
    
    default:
      nextState = MainNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}


const rootReducers = combineReducers({
    ReducerDemo,
    nav
});

export default rootReducers;
