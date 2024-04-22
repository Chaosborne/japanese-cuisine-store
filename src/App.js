import React, { useRef, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCarthandler = () => {
    setCartIsVisible(true);
  };

  const hideCarthandler = () => {
    setCartIsVisible(false);
  };

  return (
    <React.Fragment>
      {cartIsVisible && <Cart onHideCart={hideCarthandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
