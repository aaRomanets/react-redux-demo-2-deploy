import React, {useState} from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'

//компонент показа количества кексов в хранилище store и покупки произвольного количества кексов
function NewCakeContainer(props)
{
    //состояние количества покупаемых кексов
    const [number, setNumber] = useState(1);
    return (
        <div>
            {/*Количество кексов, оставшихся в хранилище store */}
            <h2>Number of cakes - {props.numOfCakes}</h2>
            {/*Задаем количество кексов, которое хотим купить */}
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            {/*Кнопка покупки заданного  количества кексов*/}
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}

//с помощью функции connect связываемся с хранилищем store
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);