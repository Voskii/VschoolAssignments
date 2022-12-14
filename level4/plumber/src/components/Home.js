import React from 'react' 
import { useNavigate } from 'react-router-dom';

export default function Home() { 
  const navigate = useNavigate()
  return (
      <div style={{ padding: 20 }}>
      
          <h2>Home View - Let's Fix Sumthin!</h2>
        
        <button onClick={() => navigate("/services")}>Go to Services page</button>
        <button onClick={() => navigate(-1)}>Go Back 1</button>
        <button onClick={() => navigate(1)}>Go Forward 1</button>
      </div> 
    );
  }