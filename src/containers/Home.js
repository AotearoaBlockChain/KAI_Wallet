// containers/Home.js
import React from 'react';
import Button from '../components/Button';

const Home = () => (
  <div>
    <h1>Welcome to the Crypto Wallet</h1>
    <Button onClick={() => alert('Button clicked!')}>Get Started</Button>
  </div>
);

export default Home;
