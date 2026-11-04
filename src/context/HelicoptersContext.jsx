import React, { createContext, useContext, useState } from 'react';
import { INITIAL_HELICOPTERS } from '../data/helicopters';

const HelicoptersContext = createContext();

export const HelicoptersProvider = ({ children }) => {
  const [helicopters, setHelicopters] = useState(INITIAL_HELICOPTERS);

  const addHelicopter = (data) => {
    const newItem = {
      id: Date.now(),
      name: data.name,
      description: data.description,
      maxSpeed: Number(data.maxSpeed),
      passengers: Number(data.passengers),
      category: data.category || 'civilian'
    };
    setHelicopters([...helicopters, newItem]);
  };

  const removeHelicopter = (id) => {
    setHelicopters(helicopters.filter((item) => item.id !== Number(id)));
  };

  return (
    <HelicoptersContext.Provider
      value={{
        helicopters,
        setHelicopters,
        addHelicopter,
        removeHelicopter
      }}
    >
      {children}
    </HelicoptersContext.Provider>
  );
};

export const useHelicopters = () => useContext(HelicoptersContext);

export default HelicoptersContext;
