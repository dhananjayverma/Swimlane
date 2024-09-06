import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com'; // Replace with actual API URL

// Fetch all blocks
export const fetchBlocks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blocks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blocks:', error);
    throw error;
  }
};

// Fetch all lanes
export const fetchLanes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/lanes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching lanes:', error);
    throw error;
  }
};

// Fetch configuration rules
export const fetchConfig = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/config`);
    return response.data;
  } catch (error) {
    console.error('Error fetching configuration:', error);
    throw error;
  }
};

// Update block (on move or data entry)
export const updateBlock = async (block) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/blocks/${block.id}`, block);
    return response.data;
  } catch (error) {
    console.error('Error updating block:', error);
    throw error;
  }
};

// Update lane details if necessary (optional based on your app's needs)
export const updateLane = async (lane) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/lanes/${lane.id}`, lane);
    return response.data;
  } catch (error) {
    console.error('Error updating lane:', error);
    throw error;
  }
};
