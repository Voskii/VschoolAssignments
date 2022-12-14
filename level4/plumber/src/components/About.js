import React from 'react' 
import { useNavigate } from 'react-router-dom';

export default function About() {

    const navigate = useNavigate()
  
    return (
        <div style={{ padding: 20 }}>
            <h2>About Us</h2>
            <p>
            We have a long lasting history up doing nothing but letting you play with this website. It's here for a distraction from your flooding basement!
            </p>  
            <button onClick={()=> navigate("/")}>Return to Home</button> 
            <button onClick={()=> navigate(-1)}>Go Back 1</button>
        </div>
      );
    }