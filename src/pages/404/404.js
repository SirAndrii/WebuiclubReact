import React from 'react';
import Button from '../../components/button';
import {useNavigate} from "react-router-dom";

export const NotFound = () => {
  let navigate = useNavigate();

  return (
    <main className="container">
        <h1>404 Error</h1>
        <Button classname="btn-large" onclick={()=> navigate('/')}>Back to Homepage</Button>
    </main>
  );  
};

