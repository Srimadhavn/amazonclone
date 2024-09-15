import React from 'react';
import { useStateValue } from '../StateProvider'; 
import './Subtotal.css';

function Subtotal() {
  const [{ basket }] = useStateValue(); 

  const calculateTotal = () => {
    if (!basket) return 0; 

    return basket.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, '')) || 0;
      return total + price;
    }, 0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  const totalAmount = calculateTotal(); 

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{formatCurrency(totalAmount)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
