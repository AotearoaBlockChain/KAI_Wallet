// services/blockchainService.js
import axios from 'axios';

const API_URL = 'https://your-blockchain-api-url.com'; // Replace with your blockchain API URL

export const getWalletBalance = async (address) => {
  try {
    const response = await axios.get(`${API_URL}/balance/${address}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch balance');
  }
};

export const sendTransaction = async (transactionData) => {
  try {
    const response = await axios.post(`${API_URL}/send`, transactionData);
    return response.data;
  } catch (error) {
    throw new Error('Transaction failed');
  }
};
