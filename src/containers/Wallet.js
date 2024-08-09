// containers/Wallet.js
import React, { useState, useEffect } from 'react';
import { getWalletBalance } from '../services/blockchainService';

const Wallet = () => {
  const [balance, setBalance] = useState(null);
  const address = 'your-wallet-address'; // Replace with the actual address

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const result = await getWalletBalance(address);
        setBalance(result.balance);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchBalance();
  }, [address]);

  return (
    <div>
      <h1>Your Wallet</h1>
      <p>Balance: {balance ? `${balance} ETH` : 'Loading...'}</p>
    </div>
  );
};

export default Wallet;
