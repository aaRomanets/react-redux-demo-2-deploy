//вытаскиваем метку покупки кекса
import { BUY_CAKE } from "./cakeTypes";

//задаем начальное состояние количества кексов в хранилище store
const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type)
    {
        //осуществляем покукпку кекса (один кекс берем из хранилища store)
        case BUY_CAKE:
        {
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        }

        default: return state;
    }
}

export default cakeReducer;