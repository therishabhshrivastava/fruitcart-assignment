import React, { useState } from 'react';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '', type: '' });

  const handleAddItem = () => {
    setInventory((prevInventory) => [...prevInventory, newItem]);
    setNewItem({ name: '', price: '', type: '' });
  };

  const handleRemoveItem = (itemName) => {
    setInventory((prevInventory) => prevInventory.filter((item) => item.name !== itemName));
  };

  const handleEditItem = (itemName) => {
    const updatedName = prompt('Enter new item name:');
    const updatedPrice = prompt('Enter new item price:');
    const updatedType = prompt('Enter new item type:');
    const updatedInventory = inventory.map((item) =>
      item.name === itemName ? { ...item, name: updatedName, price: updatedPrice, type: updatedType } : item
    );
    setInventory(updatedInventory);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Inventory Management</h3>

      <div className="mb-6 bg-gradient-to-r from-yellow-200 to-yellow-100 p-6 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            placeholder="Item Name"
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            placeholder="Price"
            className="p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            value={newItem.type}
            onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
            placeholder="Type"
            className="p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          onClick={handleAddItem}
          className="mt-4 w-full bg-gradient-to-r from-green-400 to-green-500 text-white py-3 rounded-lg hover:bg-gradient-to-l transition duration-300"
        >
          Add Item
        </button>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="table-auto w-full text-gray-700 border-separate border-spacing-2">
          <thead className="bg-green-600 text-white text-sm font-medium">
            <tr>
              <th className="py-3 px-4 rounded-l-lg">Item Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4 rounded-r-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-3 px-4 border-b">{item.name}</td>
                <td className="py-3 px-4 border-b">{item.price}</td>
                <td className="py-3 px-4 border-b">{item.type}</td>
                <td className="py-3 px-4 border-b flex space-x-2">
                  <button
                    onClick={() => handleEditItem(item.name)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.name)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryManagement;
