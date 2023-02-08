import React, { useState, useEffect, useContext} from "react"
import { useNavigate } from 'react-router-dom';
import { PokeContext } from './Context'

export default function Battle() {
    const {pokeData, pList, fighter1, fighter2, cherryPick, fight, inventory} = useContext(PokeContext)
    const navigate = useNavigate()
    console.log(fighter1, fighter2)
    
    
    return (
        <div>
            <div className="page">
            {fighter1.id
            ?
            <div className="wars">
                <div className="who1">
                    
                    <h2>{fighter1.name}</h2>
                    <img src={fighter1.img
                        ?
                        fighter1.img
                        :
                        fighter1.imgB}  
                    className={fighter1.img?'poke1':'poke11'} alt=''/>  
                    <h2>HP: {fighter1.hp}</h2>
                    <h2>Type:</h2>
                        {fighter1 && fighter1.types 
                        ? 
                        fighter1.types.map(type => (
                            <><span>{type.type.name}</span></>
                            ))
                            :
                            ''
                        }
                    <h2>Attacks:</h2>
                        {fighter1 && fighter1.attacks
                        ?
                        fighter1.attacks.map(attack => (
                            <><span>{attack.ability.name}</span></>
                            ))
                            :
                            ''
                        }
                </div>
                <button className="battleButton" onClick={() => {fight()}}>FIGHT</button> 
                <div className="who2">
                    <h2>{fighter2.name}</h2>
                    <img src={fighter2.img
                        ?
                        fighter2.img
                        :
                        fighter2.imgB}  
                        className={fighter2.img?'poke2':'poke22'} alt='' />
                    <h2>HP: {fighter2.hp}</h2>
                    <h2>Type:</h2>
                        {fighter2 && fighter2.types 
                        ? 
                        fighter2.types.map(type => (
                            <><span>{type.type.name}</span></>
                            ))
                            :
                            ''
                        }
                    <h2>Attacks:</h2>
                        {fighter2 && fighter2.attacks
                        ?
                        fighter2.attacks.map(attack => (
                            <><span>{attack.ability.name}</span></>
                            ))
                            :
                            ''
                        }
                </div>
                
            </div>
            
            :
            <button className="battleButton" onClick={() => {cherryPick()}}>GET POKEMON</button>
            }
            
            </div>
            <div className="inventory">
                <ul>
                {inventory
                ?
                inventory.map(poke => (
                    <><li>{poke.name}</li></>
                ))
                :
                ""
                }
                </ul>
            </div>
        </div>
    )
}
/* <img src={fighter1.img} className='poke1' alt=''/>
                    {fighter1 && fighter1.img
                    ?
                    fighter1.img
                    :
                    fighter1.imgB} */

//fighter1.types[0].type.name

// {
//     currentMovieDetail && currentMovieDetail.genres
//     ?
//     currentMovieDetail.genres.map(genre => (
//         <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
//     ))
//     :
//     ""
// }