import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/Cartslice";
import "../ProductCard.jsx/Productcard.css";

export function Productcard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    dispatch(addToCart(product)); 
  };

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleViewDetails}>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <div className="card-buttons">
        <button className="view-btn" onClick={(e) => { e.stopPropagation(); handleViewDetails(); }}>
          View
        </button>
       
        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
