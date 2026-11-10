import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app__content">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
