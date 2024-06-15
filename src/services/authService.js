
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const login = async (email, password) => {
  const response = await axios.get(`${API_URL}/users`, {
    params: { email, password }
  });
  return response.data.length > 0 ? response.data[0] : null;
};

export const register = async (email, password) => {
  const response = await axios.post(`${API_URL}/users`, { email, password });
  return response.data;
};
