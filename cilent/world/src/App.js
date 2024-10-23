import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './component/navbar/navbar.js';
import Kid from './component/Kids/Kid.js';
import Login from './component/navbar/Login.js'
import Logout from './component/navbar/Logout.js'
import Men from './component/Men/Men.js';
import Home from './component/Home/home.js';
import Shoe from './component/Shoes/Shoe.js';
import Women from './component/Women/Women.js';
import Cart from './component/Cart.js';
import { useSelector } from 'react-redux';
import { CartProvider } from 'react-use-cart';
function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <>
    <Router>
      <CartProvider>
      <div >
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={isAuthenticated ? <Logout /> : <Login />} />
          <Route path="/Men" element={<Men/>} />
          <Route path="/Women" element={<Women/>} />
          <Route path="/Shoe" element={<Shoe/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/Kid" element={<Kid/>} />
        </Routes>
      </div>
      </CartProvider>
    </Router>
    </>
  );
}
export default App;





