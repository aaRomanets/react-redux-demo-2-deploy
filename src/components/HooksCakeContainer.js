import React from "react";
//вытаскиваем хуки useSelector и useDispatch 
import { useSelector, useDispatch } from "react-redux";
//вытаскиваем функцию покупки кекса
import { buyCake } from "../redux";

//компонент покупки кекса (операция осуществляется через хуки)
function HooksCakeContainer() {
    //вытаскиваем количества оставшихся кексов в хранилище store c помощью хука useSelector
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (
        <div>
            {/*показываем число оставшихся кексов в хранилище store */}
            <h2>Num of cakes - {numOfCakes}</h2>
            {/*кнопка покупки кекса */}
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer;