/*
 * @Author: 屠淋 
 * @Date: 2017-05-08 14:37:23 
 * @Last Modified by: 屠淋
 * @Last Modified time: 2017-05-09 00:14:53
 */

import * as ActionTypes from '../Actions/ActionTypes.js'

const initalState = {
    text: '我是默认值',
    rootText: ''
}

export default function reducerDemo(state = initalState, action) {

    switch (action.type) {
        case ActionTypes.SHOW_MESSAGE:
            return {
                ...state,
                text: action.text
            }
        case ActionTypes.SHOW_ROOT:
            return {
                ...state,
                rootText: action.rootText
            }
        case ActionTypes.SAVE_INPUT_TEXT:
            return {
                ...state,
                inputText: 'Second传回来的值为：'+action.inputText
            }
        default:
            return state
    }

}