import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import CartPage from './pages/CartPage';
import { CartProvider } from './contexts/CartContext';
import OrderTracking from './components/OrderTracking';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Render Navbar conditionally */}
          <Route
            path="/*"
            element={<NavbarWithCondition />}
          />
          
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

// Create a separate component to conditionally render Navbar
const NavbarWithCondition = () => {
  const location = useLocation();
  const isAdminDashboard = location.pathname === '/admindashboard';

  // Render Navbar only if not on AdminDashboard
  return !isAdminDashboard ? <Navbar /> : null;
};

export default App;
