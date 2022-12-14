import React from 'react' 
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()
  return (
      <div style={{ padding: 20 }}>
      
        <h2>Services View - Let's Fix Sumthin!</h2>
        <p>Ello bruv, you must be here because you have a pipe dream.. I mean plumbing issue. Well, I am not going to fix your issue. You can however, click these nav buttons bruv. Cheerio!</p>
        <button onClick={() => navigate("/")}>Go to Home page</button>
        <button onClick={() => navigate(-1)}>Go Back 1</button>
        <button onClick={() => navigate(1)}>Go Forward 1</button>
      </div>
    )
  }