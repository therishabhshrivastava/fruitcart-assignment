import React, { useState, useEffect } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchedOrders = [
      { id: 1, buyer: 'Rishabh', address: 'Aliganj', items: ['Apple', 'Banana'], status: 'Pending' },
      { id: 2, buyer: 'Rohit', address: 'Jankipuram', items: ['Orange', 'Grape'], status: 'In Progress' },
    ];
    setOrders(fetchedOrders);
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-xl p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Orders</h3>
      <table className="table-auto w-full text-gray-700 border-separate border-spacing-2">
        <thead className="bg-blue-600 text-white text-sm font-medium">
          <tr>
            <th className="py-3 px-4 rounded-l-lg">Order ID</th>
            <th className="py-3 px-4">Buyer</th>
            <th className="py-3 px-4">Delivery Address</th>
            <th className="py-3 px-4">Items</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 rounded-r-lg">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-100">
              <td className="py-3 px-4 border-b">{order.id}</td>
              <td className="py-3 px-4 border-b">{order.buyer}</td>
              <td className="py-3 px-4 border-b">{order.address}</td>
              <td className="py-3 px-4 border-b">{order.items.join(', ')}</td>
              <td className="py-3 px-4 border-b">{order.status}</td>
              <td className="py-3 px-4 border-b flex space-x-2">
                <button
                  onClick={() => handleStatusChange(order.id, 'In Progress')}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:bg-gradient-to-l transition duration-300"
                >
                  In Progress
                </button>
                <button
                  onClick={() => handleStatusChange(order.id, 'Delivered')}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:bg-gradient-to-l transition duration-300"
                >
                  Delivered
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
