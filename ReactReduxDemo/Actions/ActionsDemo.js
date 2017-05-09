/*
 * @Author: 屠淋 
 * @Date: 2017-05-08 14:29:40 
 * @Last Modified by: 屠淋
 * @Last Modified time: 2017-05-09 00:13:04
 */
import * as ActionTypes from './ActionTypes.js'

var isDefult = false;

//输入内容

export function saveInputText(text){
    return{
        type :ActionTypes.SAVE_INPUT_TEXT,
        inputText:text
    }
}


//展示底部
export function showRootViewAction(text){
    return {
        type:ActionTypes.SHOW_ROOT,
        rootText:text
    }
}

export function showMessageAction() {

    return dispatch => {

        //模仿网络请求 回调
        netWork((isDefult) => {
            
            if (isDefult) {

                dispatch(actionFirst());

            } else {

                dispatch(actionSecond());

            }
            
        })
    }
}

function netWork(callBack) {
    isDefult = !isDefult
    callBack(isDefult);
}

function actionFirst() {

    return {
        type: ActionTypes.SHOW_MESSAGE,
        text: '我是actionFirst,'
    }

}



function actionSecond() {

    return {
        type: ActionTypes.SHOW_MESSAGE,
        text: '我是actionSecond,'
    }

}