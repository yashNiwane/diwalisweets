import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import just399 from '../assets/just399.png';
import items from '../assets/items.gif';
import diwaliVideo from '../assets/Orange and Yellow Organic Diwali Video (1).gif';

const images = [
  { src: just399, alt: 'Diwali Delights 1', caption: 'Illuminate your taste buds with our festive treats' },
  { src: items, alt: 'Diwali Delights 2', caption: 'Discover our special Diwali collection' },
  { src: diwaliVideo, alt: 'Diwali Delights 3', caption: 'Celebrate Diwali with our delicious treats' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-6 m-4 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-yellow-100">Diwali Delights</h2>
      <div className="relative h-64 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <p className="text-center text-lg">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <ChevronLeft
          className="text-yellow-200 w-8 h-8 cursor-pointer hover:text-yellow-100 transition-colors"
          onClick={prevSlide}
        />
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <ChevronRight
          className="text-yellow-200 w-8 h-8 cursor-pointer hover:text-yellow-100 transition-colors"
          onClick={nextSlide}
        />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-yellow-200' : 'bg-yellow-500'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
