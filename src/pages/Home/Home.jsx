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

  const sortedHelicopters = isSorted
    ? [...helicopters].sort((a, b) => b.maxSpeed - a.maxSpeed)
    : helicopters;

  const displayedHelicopters = showMore
    ? sortedHelicopters
    : sortedHelicopters.slice(0, 6);

  const handleToggleSort = () => {
    setIsSorted(!isSorted);
  };

  const handleCountPassengers = () => {
    const total = displayedHelicopters.reduce((sum, h) => sum + h.passengers, 0);
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

        {sortedHelicopters.length > 6 && (
          <div className="home-more">
            <PrimaryButton onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show less' : 'View more'}
            </PrimaryButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
