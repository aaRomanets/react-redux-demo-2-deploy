import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import logger from 'redux-logger'
//вытаскиваем общий редюсер
import rootReducer from './rootReducer'

//формируем хранилище store на основании имеющегося общего редюсера rootReducer 
const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(logger, thunk)));

export default store;