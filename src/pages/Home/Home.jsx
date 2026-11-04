import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import PrimaryButton from '../../components/ui/PrimaryButton/PrimaryButton';
import { useHelicopters } from '../../context/HelicoptersContext';
import './Home.css';

const Home = () => {
  const { helicopters } = useHelicopters();
  const [showMore, setShowMore] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [totalPassengers, setTotalPassengers] = useState('—');

  const displayedHelicopters = isSorted
    ? [...helicopters].sort((a, b) => b.maxSpeed - a.maxSpeed)
    : helicopters;

  const handleToggleSort = () => {
    setIsSorted(!isSorted);
  };

  const handleCountPassengers = () => {
    const total = helicopters.reduce((sum, h) => sum + h.passengers, 0);
    setTotalPassengers(`${total} місць`);
  };

  return (
    <div className="main-container">
      <Sidebar
        totalPassengers={totalPassengers}
        isSorted={isSorted}
        onToggleSort={handleToggleSort}
        onCount={handleCountPassengers}
      />

      <div className="home-content">
        <CardsGrid helicopters={displayedHelicopters} />

        <div className="home-more">
          <PrimaryButton onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Hide info' : 'View more'}
          </PrimaryButton>

          {showMore && (
            <div className="home-more__box">
              <h3 className="home-more__title">Про наш флот вертольотів</h3>
              <p className="home-more__text">
                Усі повітряні судна проходять регулярний технічний огляд та готові до виконання
                транспортних, рятувальних і цивільних місій.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
