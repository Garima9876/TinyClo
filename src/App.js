import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;