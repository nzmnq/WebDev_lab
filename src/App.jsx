import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import CardsGrid from './components/CardsGrid/CardsGrid';
import Footer from './components/Footer/Footer';
import { INITIAL_HELICOPTERS } from './data/helicopters';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* 1. Header component (Brand, Nav, Search & Clear) */}
      <Header />

      {/* Main layout container matching Lab 5 */}
      <main className="main-container">
        {/* 2. Sidebar component (Sort toggle, Capacity count) */}
        <Sidebar totalPassengers="—" isSorted={false} />

        {/* 3. CardsGrid component (renders HelicopterCard items) */}
        <CardsGrid helicopters={INITIAL_HELICOPTERS} />
      </main>

      {/* 4. Footer component */}
      <Footer />
    </div>
  );
}

export default App;
