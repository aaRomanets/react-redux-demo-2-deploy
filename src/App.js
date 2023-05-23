import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

//компонент проекта
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/*Компонент покупки одного товара (в данном случае кекса), в котором используется функция connect */}
        <ItemContainer cake/>
        {/*Компонент покупки одного товара (в данном случае пачки мороженного), в котором используется функция connect */}
        <ItemContainer/>
        {/*Компонент покупки одного товара (в данном случае кекса), который реализован с помощью useDispatch и useSelector */}
        <HooksCakeContainer/>
        {/*Компонент покупки кекса, который реализован с помощью функции connect */}
        <CakeContainer/>
        {/*Компонент покупки пачки мороженного, который реализован с помощью функции connect */}
        <IceCreamContainer/>
        {/*Компонент определенного числа кексов, который реализован с помощью функции connect */}
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
