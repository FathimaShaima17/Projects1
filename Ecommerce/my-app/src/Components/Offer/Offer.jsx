import React from 'react';
import '../Offer/Offer.css'
import { useNavigate } from 'react-router-dom';


export const Offer = () => {


  const navigate = useNavigate();
  
  return(
 <div className='offer-background'>
  <div className="offers">
    <div className="offer-card">50% OFF Electronics</div>
    <div className="offer-card">Free Shipping</div>
    <div className="offer-card">New Arrivals</div>
  </div>
   <button onClick={()=>navigate('/products')}>Shop Now</button>
  </div>
)
}