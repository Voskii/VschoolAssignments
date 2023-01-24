import React from 'react' 
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className='homeContainer'>
            <h2>Fill out the below!</h2>
            <div style={{padding: 20}}>
              <input 
                className='inputMe'
                name="title"  
                value={''} 
                type="text" 
                onChange={''}
              /> long
              <input 
                className='inputMe'
                name="title"  
                value={''} 
                type="text" 
                onChange={''}
              /> lat
              <input 
                className='inputMe'
                name="title"  
                value={''} 
                type="text" 
                onChange={''}
              /> ip add
            </div>
            <div style={{padding: 20}}>
              <button onClick={() => navigate(1)}>Forward</button>
              <button onClick={() => navigate(-1)}>Back</button>
            </div> 
            <input 
              className='json'
              name="title"  
              value={''} 
              type="text" 
              onChange={''}
            /> JSON
        </div>
      )
    }

    // ̿̿  ̿̿ ̿̿ ̿'̿'\̵͇̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿/’̿’̿ ̿ ̿̿ ̿̿ 