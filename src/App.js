import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartContextProvider from './store/CartContextProvider';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCarthandler = () => {
    setCartIsVisible(true);
  };

  const hideCarthandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCarthandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
