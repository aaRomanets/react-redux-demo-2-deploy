import { BUY_ICECREAM } from "./iceCreamTypes";

//задаем начальное состояние количества пачек мороженного в хранилище store
const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        //осуществляем покупку мороженного (одну пачку мороженного берем из хранилища store)
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state;
    }
}

export default iceCreamReducer;