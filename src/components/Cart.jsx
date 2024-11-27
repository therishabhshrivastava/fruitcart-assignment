import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';  // Updated import

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({ name: '', address: '', paymentMethod: '' });
  const navigate = useNavigate();  // Updated navigate hook

  // Calculate total price and items count
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Determine delivery charge
  const deliveryCharge = totalPrice < 249 ? 50 : 0;

  // Total payable amount
  const totalPayable = totalPrice + deliveryCharge;

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleOrderSubmit = () => {
    // Here you can send order details to the backend or save in context/state
    console.log('Order Details:', orderDetails);

    // Redirect to order tracking page after placing the order
    navigate('/order-tracking', {
        state: {
          orderDetails,
          cart,
          totalPrice,
          totalPayable
        }
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div class="h-screen bg-gray-100 pt-20">
    <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
 
      <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
      
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start p-4 border-b border-gray-200 last:border-b-0"
          >
            {/* Item Details */}
            <div className="mt-2">
              <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
              <p className="mt-1 text-sm text-gray-700">
                Quantity: {item.quantity} kg
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Price: ₹{item.price} per kg
              </p>
            </div>
           
            <div className="mt-4 sm:mt-0">
              <span className="bg-gray-100 text-gray-800 py-1 px-3 rounded">
                ₹{item.price * item.quantity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

 
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Total Price: ₹{totalPrice}</p>
        </div>
        {totalPrice < 249 && (
              <p className="text-sm text-red-500">* Delivery charge (orders less than ₹249): ₹50</p>
            )}
        <div class="flex justify-between">
          <p class="text-gray-700">Delivery Charge: ₹{deliveryCharge}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Total Payable: ₹{totalPayable}</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">₹{totalPayable}</p>
          </div>
        </div>
        <button
              onClick={handleCheckout}
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
            >
              Proceed to Checkout
            </button>
      </div>
    </div>
  </div>

        </>
      )}

      {/* Modal for Checkout Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Enter Order Details</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={orderDetails.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Address</label>
                <textarea
                  name="address"
                  value={orderDetails.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={orderDetails.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="Cash on Delivery">Cash on Delivery</option>
                </select>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleOrderSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
