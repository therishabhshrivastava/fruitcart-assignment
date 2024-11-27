import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartSummary = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
       <div className="bg-red-800 text-white p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-bold mb-2">Cart Summary</h3>
      <div className="divide-y divide-gray-700">
        {cart.map((item, index) => (
          <div key={index} className="py-2">
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-gray-300">Quantity: {item.quantity} kg</p> {/* Displaying quantity in kg */}
            <p className="text-gray-300">Price: ₹{item.price} per kg</p> {/* Displaying price per kg */}
            <p className="text-gray-300">Total Price: ₹{item.price * item.quantity}</p> {/* Calculating total price for the item */}
          </div>
        ))}
      </div>
      <p className="text-gray-300 mt-2">Total Price: ₹{totalPrice}</p>
    </div>
    </>
   
  );
};

export default CartSummary;