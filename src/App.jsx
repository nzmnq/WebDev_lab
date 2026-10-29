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
      <Header />

      <main className="main-container">
        <Sidebar totalPassengers="—" isSorted={false} />

        <CardsGrid helicopters={INITIAL_HELICOPTERS} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
