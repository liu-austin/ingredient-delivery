// jshint esversion:6
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ordersReducer from './orders/orders.reducer';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  orders: ordersReducer
});

export default persistReducer(persistConfig, rootReducer);