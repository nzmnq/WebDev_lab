import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  createHelicopter,
  deleteHelicopter,
  getHelicopters,
  updateHelicopter
} from '../api/helicoptersApi';

const HelicoptersContext = createContext();

export const HelicoptersProvider = ({ children }) => {
  const [helicopters, setHelicopters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadHelicopters = useCallback(async (signal) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getHelicopters({}, signal);
      setHelicopters(data);
    } catch (err) {
      if (err.name === 'CanceledError' || err.code === 'ERR_CANCELED' || signal?.aborted) {
        return;
      }
      setError('Не вдалося завантажити дані з сервера.');
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  }, []);

  const fetchHelicopters = useCallback(() => loadHelicopters(), [loadHelicopters]);

  useEffect(() => {
    const controller = new AbortController();
    loadHelicopters(controller.signal);
    return () => controller.abort();
  }, [loadHelicopters]);

  const addHelicopter = async (data) => {
    const created = await createHelicopter({
      name: data.name,
      description: data.description,
      maxSpeed: Number(data.maxSpeed),
      passengers: Number(data.passengers),
      category: data.category || 'civilian',
      image: data.image || ''
    });
    setHelicopters((prev) => [...prev, created]);
    return created;
  };

  const editHelicopter = async (id, data) => {
    const updated = await updateHelicopter(id, {
      name: data.name,
      description: data.description,
      maxSpeed: Number(data.maxSpeed),
      passengers: Number(data.passengers),
      category: data.category || 'civilian',
      image: data.image !== undefined ? data.image : ''
    });
    setHelicopters((prev) =>
      prev.map((item) => (item.id === Number(id) ? updated : item))
    );
    return updated;
  };

  const removeHelicopter = async (id) => {
    await deleteHelicopter(id);
    setHelicopters((prev) => prev.filter((item) => item.id !== Number(id)));
  };

  return (
    <HelicoptersContext.Provider
      value={{
        helicopters,
        setHelicopters,
        loading,
        error,
        fetchHelicopters,
        addHelicopter,
        editHelicopter,
        removeHelicopter
      }}
    >
      {children}
    </HelicoptersContext.Provider>
  );
};

export const useHelicopters = () => useContext(HelicoptersContext);

export default HelicoptersContext;
