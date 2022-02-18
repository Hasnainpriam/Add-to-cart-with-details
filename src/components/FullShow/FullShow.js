import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Judge from '../Judge/Judge';
import './FullShow.css'
const FullShow = () => {
  const [judges,setJudges]=useState([]);
  const [cart,setCart]=useState([]);
  
  useEffect(()=>{
    fetch('./projectData.json')
    .then(res=>res.json())
    .then(data=>setJudges(data))
  },[])

  const handleCart = judge =>{

        const matchKey = cart.find((data) => data.id === judge.id);
        
        if (matchKey === undefined) {
          const newCart = [...cart, judge];
          setCart(newCart);
        } else {
          alert(
            "You Are Already Added " +
              '"' +
              judge.name +
              '"' +
              " To The Cart"
          );
        }
  }

  return (
    <div className='fullShow-container'>
      <div className='judges-container'>
         <div className='forGrid'>
        {
       judges.map(judge => <Judge key={judge.id} judge={judge} handleCart={handleCart}></Judge>)
        }
         </div>           
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default FullShow;