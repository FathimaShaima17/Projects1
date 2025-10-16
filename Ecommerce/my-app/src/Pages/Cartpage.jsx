import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slice/Cartslice";

export default function Cartpage() {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <p>Qty: {item.quantity}</p>
            <p>${item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}
