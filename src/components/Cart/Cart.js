import React from 'react';

import './Cart.css'
const Cart = (props) => {
  const {cart}=props;
  console.log(cart);
  let cost=0;
  for(const judge of cart){
    cost = cost + judge.salary;
    
  }
   
  return (
    <div className='cart-container'>
      <h1>Total Judges: {cart.length}</h1>
      <h1>Cost : $ {cost}</h1>
      <h2>Name:</h2>
      <ul>
        {
        cart.map(person =><h3 className='name'>{person.name}</h3>)
        }
      </ul>
     </div>
     
  );
};

export default Cart;        