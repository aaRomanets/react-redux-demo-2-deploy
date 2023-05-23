//вытоскиваем метку покупки кекса
import { BUY_CAKE } from "./cakeTypes"

//функция осуществления покупки кекса
export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}