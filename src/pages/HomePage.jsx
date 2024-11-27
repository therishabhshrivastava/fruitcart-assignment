import React from 'react';
import CartSummary from '../components/CartSummary';
import FruitItem from '../components/FruitItem';

const Home = () => (
    <>
      {/* <h1 className="text-3xl text-center font-bold mb-4">Welcome to the Fruit Cart</h1>
      <div className='felx'>
        <div>
          <FruitList />
        </div>
        <div>
          <CartSummary />
        </div>
      </div> */}

<div className="p-4">
      <h1 className="text-3xl text-center font-bold mb-4">Welcome to the Fruit Cart</h1>
      <div className="flex">
        {/* Fruit List */}
        <div className="flex-1">
          <FruitItem />
        </div>
        
        {/* Cart Summary */}
        <div className="w-1/4 ml-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <CartSummary />
        </div>
      </div>
    </div>
    </>
      
   
  
  // <>
  //    <FruitList />
  //    <CartSummary />
  // </>
);

export default Home;