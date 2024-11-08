import React from 'react';
import Greeting from './components/Greeting';

const Welcome: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <Greeting name="Matas" />
    </div>
  );
};

export default Welcome;
