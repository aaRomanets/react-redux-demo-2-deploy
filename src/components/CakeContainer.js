import React from 'react'
import {connect} from 'react-redux'
//вытаскиваем функцию покупки кекса
import { buyCake } from '../redux'

//компонент показа количества кексов в хранилище store и покупки одного кекса
function CakeContainer(props)
{
    return (
        <div>
            {/*Количество кексов в хранилище store */}
            <h2>Number of cakes - {props.numOfCakes}</h2>
             {/*Кнопка покупки кекса*/}
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    //выводим количество оставшихся кексов после очередной покупки
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

//Производим покупку кекса 
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

//с помощью функции connect связываемся с хранилищем store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);