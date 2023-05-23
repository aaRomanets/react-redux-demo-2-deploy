import { combineReducers } from "redux";
//вытаскиваем редюсер по кексам
import cakeReducer from './cake/cakeReducer';
//вытоскиваем редюсер по мороженному
import iceCreamReducer from "./iceCream/iceCreamReducer";

//формируем общий редюсер
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer;