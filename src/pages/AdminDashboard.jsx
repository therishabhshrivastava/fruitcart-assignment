import React, { useState } from 'react';
import OrderManagement from '../components/OrderManagement';
import InventoryManagement from '../components/InventoryManagement';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('orders');
  
    return (
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen flex items-center justify-center py-10">
        <div className="bg-white rounded-xl shadow-xl w-full md:w-3/4 xl:w-2/3 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Admin Dashboard</h2>
  
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-8 py-3 text-lg rounded-full mx-4 font-semibold transition duration-300 transform ${
                activeTab === 'orders' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              } hover:bg-blue-700 hover:text-white focus:outline-none`}
            >
              Order Management
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-8 py-3 text-lg rounded-full mx-4 font-semibold transition duration-300 transform ${
                activeTab === 'inventory' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'
              } hover:bg-green-700 hover:text-white focus:outline-none`}
            >
              Inventory Management
            </button>
          </div>
  
          <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
            {activeTab === 'orders' && <OrderManagement />}
            {activeTab === 'inventory' && <InventoryManagement />}
          </div>
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;
