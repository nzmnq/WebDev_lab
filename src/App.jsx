import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import ItemPage from './pages/ItemPage/ItemPage';
import CreateHelicopter from './pages/CreateHelicopter/CreateHelicopter';
import { HelicoptersProvider } from './context/HelicoptersContext';
import './App.css';

function App() {
  return (
    <HelicoptersProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <main className="app__content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/create" element={<CreateHelicopter />} />
              <Route path="/item/:id" element={<ItemPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelicoptersProvider>
  );
}

export default App;
