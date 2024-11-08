import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from '../../layouts/MainLayout';



const HelloWorld: React.FC = () => {
  const [message, setMessage] = useState('Welcome');

  useEffect(() => {
    // Axios automatically parses JSON, unlike fetch
    axios.get('/api/hello')
      .then(response => {
        // response.data contains the parsed JSON
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    
    <MainLayout>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Hello World</h1>
          <p className="mt-4 text-xl">{message}</p>
        </div>
    </MainLayout>
  );
};

export default HelloWorld;