import React from 'react' 
import { useNavigate } from 'react-router-dom';

export default function Are() {
  const navigate = useNavigate()
  return (
      <div style={{ padding: 20 }}>
        <h2>Are - Content</h2>
        <h2>Paragraph Page! YODER BE ROASTIN</h2>
        <button onClick={() => navigate("/")}>Go to Home page</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
        
      </div>
    )
  }