import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Checkout from './components/Checkout'; 
import './App.css';

function App() {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (item) => {
    setBasketItems([...basketItems, item]);
  };

  return (
    <Router>
      <div className="app">
        <Header basketItems={basketItems} />
        <Routes>
          <Route path="/" element={<Home addToBasket={addToBasket} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout basketItems={basketItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
