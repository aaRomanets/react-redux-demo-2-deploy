import React from 'react'
import {connect} from 'react-redux'
//вытаскиваем функцию покупки пачки мороженного
import { buyIceCream } from '../redux'

//компонент показа количества пачек мороженного в хранилище store
function IceCreamContainer(props)
{
    return (
        <div>
            {/*Количество пачек мороженного в хранилище store */}
            <h2>Number of icecreams - {props.numOfIceCreams}</h2>
            {/*Кнопка покупки пачки мороженного*/}
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    //выводим количество оставшихся пачек мороженного после очередной покупки
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

//Производим покупку пачки мороженного
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

//с помощью функции connect связываемся с хранилищем store
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);