import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../redux/slice/Productslice";
import { useNavigate } from "react-router-dom";
import { addToCart } from "..//redux/slice/Cartslice";

export default function Productdetailspage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedProduct: product, loading } = useSelector(state => state.products);

  useEffect(() => { dispatch(fetchProductById(id)); }, [dispatch, id]);

  if (loading || !product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => { dispatch(addToCart(product)); navigate("/cart"); }}>Add to Cart</button>
      </div>
    </div>
  );
}
