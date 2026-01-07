import React from 'react';
import './TrueGlitch.css';

const TrueGlitch = ({ text }) => {
  return (
    <div className="glitch-container">
      {/* Capa principal */}
      <h1 className="glitch" data-text={text}>
        {text}
      </h1>
    </div>
  );
};

export default TrueGlitch;