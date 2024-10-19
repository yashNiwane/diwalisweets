import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import ProductCard from './components/ProductCard';
import About from './components/About';
import Contact from './components/Contact'; // Import the Contact component
import Footer from './components/Footer';
import { products } from './data/products';

const Home = () => (
  <>
    <Slider />
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  </>
);

const SunandasKitchen = () => {
  return (
    <Router>
      <div className="bg-gradient-to-b from-purple-900 via-indigo-900 to-gray-900 min-h-screen text-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default SunandasKitchen;
