import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slice/Productslice";
import { Productcard } from "../Components/ProductCard.jsx/ProductCard";

export default function Productlistpage() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector(state => state.products);

  useEffect(() => { dispatch(fetchProducts()); }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="product-flex">
      {items.map(product => <Productcard key={product.id} product={product} />)}
    </div>
  );
}
