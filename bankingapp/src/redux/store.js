import { createStore } from 'redux';
import { accountReducer } from './reducers'

//creating store by using accountreduce
export const store = createStore(accountReducer);


