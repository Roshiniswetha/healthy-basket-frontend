import { configureStore, compose } from '@reduxjs/toolkit'
import {applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from './rootReducer';
// import logger from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({   
    reducer: rootReducer,
},composeEnhancers(applyMiddleware(thunk)));