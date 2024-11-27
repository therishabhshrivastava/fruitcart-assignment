import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const OrderTracking = () => {
  const location = useLocation();
  const { state } = location;

  // Destructure order details, cart, and other info from the state
  const { orderDetails, cart, totalPrice, totalPayable } = state || {};

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>

      {/* Check if orderDetails exists */}
      {orderDetails ? (
        <>
          <div>
            <h3 className="text-xl font-semibold">Order Details</h3>
            <p><strong>Name:</strong> {orderDetails.name}</p>
            <p><strong>Address:</strong> {orderDetails.address}</p>
            <p><strong>Payment Method:</strong> {orderDetails.paymentMethod}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Cart Items</h3>
            <ul className="divide-y divide-gray-300">
              {cart.map((item, index) => (
                <li key={index} className="py-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-gray-600">Quantity: {item.quantity} kg</p>
                      <p className="text-gray-600">Price: ₹{item.price} per kg</p>
                    </div>
                    <p className="text-lg font-semibold">₹{item.price * item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold mt-4">Total Price: ₹{totalPrice}</p>
            <p className="text-lg font-bold">Total Payable: ₹{totalPayable}</p>
            <p className="text-lg font-bold mt-4">Order Status: Pending</p>
          </div>
        </>
      ) : (
        <p>No order details available. Please make sure you've placed an order first.</p>
      )}

      <div className="mt-4">
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderTracking;
