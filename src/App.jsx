import './App.css';
import { Routes, Route } from 'react-router-dom';
import User from './components/User';
import Products from './components/Products';
import Orders from './components/Orders';
import Navbyme from './components/navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbyme />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
