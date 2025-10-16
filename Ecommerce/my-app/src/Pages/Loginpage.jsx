import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/slice/Authslice";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";

export default function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginStart());

    
    setTimeout(() => {
      if (email === "shaima@gmail.com" && password === "654321hg") {
        dispatch(loginSuccess({ email }));
        navigate("/");
      } else {
        dispatch(loginFailure("Invalid credentials"));
      }
    }, 500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to ShopEase</h2>
        <form onSubmit={handleLogin}>
          <input
      type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
}
