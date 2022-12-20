import React from 'react' 
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()
    return (
        <div style={{ padding: 20 }}>
            <h2>WELCOME TO MY WEBSITE</h2> 
            <button onClick={() => navigate("/")}>Go to Home page</button>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate(1)}>Go Forward</button>
        </div>
      )
    }