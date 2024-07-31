// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Home/Homepage";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <> </>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrders/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
