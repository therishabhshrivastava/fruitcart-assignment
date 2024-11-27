import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import AppleImage from '../assets/apple.png';
import BananaImage from '../assets/banana.png';
import MangoImage from '../assets/mango.png';
import GrapeImage from '../assets/grape.png';
import GuavaImage from '../assets/guava.png';
import LycheeImage from '../assets/lychee.png';
import OrangeImage from '../assets/orange.jpg';
import PomegranateImage from '../assets/pomegranate.png';
import WatermelonImage from '../assets/watermelon.png';

const FruitItem = () => {
  const [quantity, setQuantity] = useState(0);
  const [showAddedNotification, setShowAddedNotification] = useState(false);
  const { addToCart } = useContext(CartContext);

  const fruits = [
    { id: 1, name: 'Apple', price: 30 },
    { id: 2, name: 'Banana', price: 40 },
    { id: 3, name: 'Mango', price: 45 },
    { id: 4, name: 'Grape', price: 50 },
    { id: 5, name: 'Lychee', price: 55 },
    { id: 6, name: 'Orange', price: 45 },
    { id: 7, name: 'Pomegranate', price: 60 },
    { id: 8, name: 'Watermelon', price: 35 },
    { id: 9, name: 'Guava', price: 25 },
  ];

  // Function to get the corresponding image for a fruit
  const getFruitImage = (name) => {
    switch (name.toLowerCase()) {
      case 'apple':
        return AppleImage;
      case 'banana':
        return BananaImage;
      case 'mango':
        return MangoImage;
      case 'grape':
        return GrapeImage;
      case 'guava':
        return GuavaImage;
      case 'lychee':
        return LycheeImage;
      case 'orange':
        return OrangeImage;
      case 'pomegranate':
        return PomegranateImage;
      case 'watermelon':
        return WatermelonImage;
      default:
        return '';
    }
  };

  const handleAddToCart = (fruit) => {
    if (quantity > 0) {
      addToCart({ ...fruit, quantity: parseFloat(quantity) });
      setQuantity(0);
      setShowAddedNotification(true);
      setTimeout(() => setShowAddedNotification(false), 2000); // Hide notification after 2 seconds
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fruits.map((fruit) => (
            <div key={fruit.id} className="p-4">
              <div className="block relative h-48 rounded overflow-hidden bg-white">
                <img
                  alt={fruit.name}
                  className="object-cover object-center w-full h-full block"
                  src={getFruitImage(fruit.name)}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Fruit</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{fruit.name}</h2>
                <p className="mt-1">₹{fruit.price} per kg</p>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="0"
                  className="border-gray-300 rounded-md p-1 w-20 mr-2"
                  placeholder="Qty (kg)"
                />
                <button
                  onClick={() => handleAddToCart(fruit)}
                  className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
                >
                  {showAddedNotification ? 'Added!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FruitItem;
