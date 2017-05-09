/*
 * @Author: 屠淋 
 * @Date: 2017-05-08 14:20:58 
 * @Last Modified by: 屠淋
 * @Last Modified time: 2017-05-08 23:49:51
 */
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../Reducers/rootReducers.js';

const logger = store => next => action => {
	if(typeof action === 'function') console.log('dispatching a function');
	else console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}
const createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore);

export default function configureStore(initialState){
    return createStoreWithMiddleware(RootReducer,initialState);
}


