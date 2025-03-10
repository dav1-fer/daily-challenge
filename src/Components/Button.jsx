import React from 'react';

const Button = ({ onGenerate }) => {
  return (
    <button onClick={onGenerate} >
      Generate Challenge!
    </button>
  );
};

export default Button;
