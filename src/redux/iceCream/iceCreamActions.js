//вытоскиваем метку покупки мороженного
import { BUY_ICECREAM } from "./iceCreamTypes";

//функция осуществления покупки мороженного
export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}