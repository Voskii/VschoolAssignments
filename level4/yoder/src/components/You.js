import React from 'react' 
import { useNavigate } from 'react-router-dom';

export default function You() {

    const navigate = useNavigate()
  
    return (
        <div style={{ padding: 20 }}>
            <h2>You - Content</h2>
            <button onClick={()=> navigate("/")}>Return to Home</button> 
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </div>
      );
    }