// components/Button.js
import React from 'react';
import './Button.css'; // Optional: for custom styles

const Button = ({ onClick, children, className }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

export default Button;
