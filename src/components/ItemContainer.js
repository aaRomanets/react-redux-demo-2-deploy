import React from 'react';
import {connect} from "react-redux"
//вытаскиваем функции покупки товаров либо кекса либо пачки мороженного
import { buyCake, buyIceCream } from '../redux';

//компонент показа количества товаров в хранилище store
function ItemContainer(props) {
    return (
        <div>
            {/*Показываем количество оставшихся товаров*/}
            <h2>Item - {props.item}</h2>
            {/*Кнопка покупки товара */}
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
} 

const mapStateToProps = (state, ownProps) => 
{
    //выводим количество оставшихся товаров после очередной покупки (это или кексы или пачки мороженного)
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;

    return {
        item : itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => 
{
    //Производим или покупку кекса или пачки мороженного 
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

    return {
        buyItem : dispatchFunction
    }
}

//с помощью функции connect связываемся с хранилищем store
export default connect(mapStateToProps, mapDispatchToProps) (ItemContainer);