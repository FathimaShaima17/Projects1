import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slice/Authslice';
import './Navbar.css';

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart);
  const user = useSelector(state => state.auth.user);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="navbar">
    
      <div className="navbar-logo" onClick={() => navigate('/')}>
        ShopEase
      </div>

     
      <div className="navbar-search">
        <input type="text" placeholder="Search for products, brands and more" />
        <button onClick={() => {}}>Search</button>
      </div>

     
      <div className="navbar-links">
        <span onClick={() => navigate('/')}>Home</span>
        <span onClick={() => navigate('/products')}>Products</span>
        <span onClick={() => navigate('/Aboutuspage')}>About</span>
        <span onClick={() => navigate('/Contactpage')}>Contact</span>
      </div>

     
      <div className="navbar-cart">
        {user ? (
          <>
            <span>Hello, {user.email}</span>
            <button onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</button>
          </>
        ) : (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
        <span style={{ marginLeft: '20px', cursor: 'pointer' }} onClick={() => navigate('/cart')}>
          🛒 Cart ({cartCount})
        </span>
      </div>
    </nav>
  );
};
