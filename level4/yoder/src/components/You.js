import React, { useState } from 'react' 
import { useNavigate } from 'react-router-dom';


export default function You() {

    const navigate = useNavigate()
    const [data, setData] = useState('fish and chips') 
  
    return (
        <div style={{ padding: 20 }} className="youPage">
            <h2>You - Content</h2>
            <div className='youBackGG'>
              <h3>
                {data}
              </h3>
              <h3>
                {data}
              </h3>
            </div>
            
            <div className='youButt'>
              <button onClick={()=> navigate("/")}>Home</button> 
              <button onClick={()=> navigate(-1)}>Back</button>
            </div>
        </div>
      );
    }