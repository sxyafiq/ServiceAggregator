// /src/utils/api.js
import axios from 'axios';

export const fetchServices = async () => {
  const response = await axios.get('YOUR_API_ENDPOINT');
  return response.data;
};
