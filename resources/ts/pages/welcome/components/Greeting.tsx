import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <p className="text-xl">
      Hello, {name}! Welcome to our site.
    </p>
  );
};

export default Greeting;
