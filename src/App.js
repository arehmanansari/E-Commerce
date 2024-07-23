import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Categories from "./Components/Categories";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import ProductsInfo from './Components/ProductsInfo';
// import DashboardNavbar from './Dashboard/DashboardNavbar';
// import DashboardSidebar from './Dashboard/DashboardSidebar';
import Dashboard from './Dashboard/Dashboard';
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import Subscription from './Components/Subscription';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/productinfo' element={<ProductsInfo />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/registration' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/subscription' element={<Subscription />} />
      </Routes>
      <br />
      <Footer />
      {/* <DashboardNavbar />
      <DashboardSidebar /> */}
    </div>
  );
}

export default App;
