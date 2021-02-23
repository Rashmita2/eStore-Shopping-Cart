import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import data from './Data'
function App() {
  const [ cartItems, setCartItems ] = useState(data);
  console.log(cartItems);

  return (
    <div className="App">
      <Header title="eStore"/>
      <div className="app-main">
            < CartItems items={cartItems}/>
            < CartTotal />
      </div>
    </div>
  );
}

export default App;
