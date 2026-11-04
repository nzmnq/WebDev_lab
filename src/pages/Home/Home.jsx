import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import { INITIAL_HELICOPTERS } from '../../data/helicopters';
import './Home.css';

const Home = () => {
  return (
    <div className="main-container">
      <Sidebar totalPassengers="—" isSorted={false} />
      <div className="home-content">
        <CardsGrid helicopters={INITIAL_HELICOPTERS} />
      </div>
    </div>
  );
};

export default Home;
