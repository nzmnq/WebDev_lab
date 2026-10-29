import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HelicopterList from './components/HelicopterList/HelicopterList';
import Footer from './components/Footer/Footer';
import { HELICOPTERS_DATA } from './data/helicopters';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* 1. Header with navigation & branding */}
      <Header />

      {/* Main Home Page Content */}
      <main className="app__main">
        {/* 2. Hero Section with banner, CTA, and stats */}
        <Hero />

        {/* 3. Features & Company Standards Section */}
        <Features />

        {/* 4. Helicopter Catalog Preview Section */}
        <HelicopterList helicopters={HELICOPTERS_DATA} />
      </main>

      {/* 5. Footer with links, contacts, and copyright */}
      <Footer />
    </div>
  );
}

export default App;
