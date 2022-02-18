import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './Judge.css'
const Judge = (props) => {
  const element = <FontAwesomeIcon icon={faCartShopping} />
  const {name,img,age,salary,id}=props.judge;
  return (
      <div className='singleJudge' >
           <img style={{width:'300px',height:'300px',borderRadius:'10px'}} src={img} alt="" />
           <h2>Name: {name}</h2>
           <h3>Age: {age}</h3>
           <h2>Salary: $ {salary}</h2>
           <button 
           className='button-regular' 
           onClick={()=>{props.handleCart(props.judge)}}
           >{element} Add to cart</button>
      </div>
  );
};

export default Judge;