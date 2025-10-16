import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

import { Navbar } from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Homepage";
import Productlistpage from "./Pages/ProductListpage"
import Productdetailspage from "./Pages/ProductDetailpage";
import Cartpage from "./Pages/Cartpage"
import Aboutuspage from "./Pages/Aboutpage"
import Contactpage from "./Pages/Contact"
import Loginpage from "./Pages/Loginpage";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Productlistpage />} />
          <Route path="/products/:id" element={<Productdetailspage />} />
          <Route path="/cart" element={<Cartpage/>} />
       <Route path="/Aboutuspage" element={<Aboutuspage/>} />
   <Route path="/Contactpage" element={<Contactpage />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
