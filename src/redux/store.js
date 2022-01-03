import {createStore , applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import rootReduer from './reducers/rootReducer';

 
const middleware = [thunk, logger];

const store = createStore(
    rootReduer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;

