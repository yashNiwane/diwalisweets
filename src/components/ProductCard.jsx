import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ProductCard = ({ name, description, price, imageUrl, phoneNumber }) => {
  const [quantity, setQuantity] = useState('500g');
  const [customQuantity, setCustomQuantity] = useState('');
  const [customUnit, setCustomUnit] = useState('g');

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCustomQuantityChange = (e) => {
    setCustomQuantity(e.target.value);
  };

  const handleCustomUnitChange = (e) => {
    setCustomUnit(e.target.value);
  };

  const handleOrderNow = () => {
    const selectedQuantity = quantity === 'other' ? `${customQuantity}${customUnit}` : quantity;
    const message = `Hello! I'd like to order ${selectedQuantity} of ${name}. Please provide me with payment details and delivery information.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 m-4 p-6 rounded-lg shadow-xl">
      <div className="h-48 mb-6 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={imageUrl} alt={name} className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-90" />
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-yellow-100">{name}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-bold mb-5 text-3xl">₹{price}</p>
      <div className="mb-6">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-2">
          Select Quantity:
        </label>
        <select
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="block w-full p-3 bg-gray-800 border border-gray-600 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 text-gray-100"
        >
          <option value="500g">500g</option>
          <option value="1kg">1kg</option>
          <option value="2kg">2kg</option>
          <option value="other">Other</option>
        </select>
      </div>
      {quantity === 'other' && (
        <div className="mb-6">
          <label htmlFor="customQuantity" className="block text-sm font-medium text-gray-300 mb-2">
            Enter custom quantity:
          </label>
          <div className="flex">
            <input
              type="number"
              id="customQuantity"
              value={customQuantity}
              onChange={handleCustomQuantityChange}
              className="block w-full p-3 bg-gray-800 border border-gray-600 rounded-l-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 text-gray-100"
              placeholder="Enter amount"
            />
            <select
              value={customUnit}
              onChange={handleCustomUnitChange}
              className="p-3 bg-gray-800 border border-gray-600 rounded-r-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 text-gray-100"
            >
              <option value="g">g</option>
              <option value="kg">kg</option>
            </select>
          </div>
        </div>
      )}
      <button
        onClick={handleOrderNow}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition duration-300 flex items-center justify-center w-full font-semibold"
      >
        <Send className="mr-2" />
        Order Now
      </button>
    </div>
  );
};

export default ProductCard;
