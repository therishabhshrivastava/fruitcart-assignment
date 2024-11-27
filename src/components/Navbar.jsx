import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  // Calculate total items in cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-bold">Home</Link>
          <Link to="/cart" className="text-white text-lg font-bold flex items-center">
            Cart
            <span className="bg-red-500 text-white rounded-full px-2 ml-1">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;