import { createStore, combineReducers } from 'redux';
import todoReducer from './reducer';
import { saveToLocalStorage, loadFromLocalStorage } from './LocalStorage';

// Combine the reducers into a root reducer
const rootReducers = combineReducers({ Todo: todoReducer });

// Create the Redux store with the root reducer and load initial state from local storage
const store = createStore(rootReducers, loadFromLocalStorage());

// Subscribe to changes in the store and save the state to local storage
store.subscribe(() => saveToLocalStorage(store.getState()));

// Export the store as the default export
export default store;