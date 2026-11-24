import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHelicopters = async (filters = {}, signal = undefined) => {
  const params = {};

  if (filters.category && filters.category !== 'all') {
    params.category = filters.category;
  }

  if (filters.capacity && filters.capacity !== 'all') {
    params.capacity = filters.capacity;
  }

  if (filters.search && filters.search.trim() !== '') {
    params.search = filters.search.trim();
  }

  const response = await apiClient.get('/helicopters', { params, signal });
  return response.data;
};

export const getHelicopterById = async (id, signal = undefined) => {
  const response = await apiClient.get(`/helicopters/${id}`, { signal });
  return response.data;
};

export const createHelicopter = async (helicopterData) => {
  const response = await apiClient.post('/helicopters', helicopterData);
  return response.data;
};

export const updateHelicopter = async (id, helicopterData) => {
  const response = await apiClient.put(`/helicopters/${id}`, helicopterData);
  return response.data;
};

export const deleteHelicopter = async (id) => {
  const response = await apiClient.delete(`/helicopters/${id}`);
  return response.data;
};
