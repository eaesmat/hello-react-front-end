import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import greeting from './greeting/greeting';

const rootReducer = combineReducers({ greeting });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
