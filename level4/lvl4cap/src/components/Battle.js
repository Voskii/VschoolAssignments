import React, { useState, useEffect, useContext} from "react"
import { useNavigate } from 'react-router-dom';
import { PokeContext } from './Context'
import bag from '../images/bag.png'

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
                    <h2 className="pokeTitle">{fighter1.name}</h2>
                    <img src={fighter1.img
                        ?
                        fighter1.img
                        :
                        fighter1.imgB}  
                    className={fighter1.img?'poke1':'poke11'} alt=''/>  
                    <h2 className="pokeTitle">HP:</h2>
                    <h2 className="pokeInfo">{fighter1.hp}</h2>
                    <h2 className="pokeTitle">Type:</h2>
                        {fighter1 && fighter1.types 
                        ? 
                        fighter1.types.map(type => (
                            <><h2 className="pokeInfo">{type.type.name}</h2></>
                            ))
                            :
                            ''
                        }
                    <h2 className="pokeTitle">Attacks:</h2>
                        {fighter1 && fighter1.attacks
                        ?
                        fighter1.attacks.map(attack => (
                            <><h2 className="pokeInfo">{attack.ability.name}</h2></>
                            ))
                            :
                            ''
                        }
                </div>
                <button className="battleButton" onClick={() => {fight()}}>FIGHT</button> 
                <div className="who2">
                    <h2 className="pokeTitle">{fighter2.name}</h2>
                    <img src={fighter2.img
                        ?
                        fighter2.img
                        :
                        fighter2.imgB}  
                        className={fighter2.img?'poke2':'poke22'} alt='' />
                    <h2 className="pokeTitle">HP:</h2>
                    <h2 className="pokeInfo">{fighter2.hp}</h2>
                    <h2 className="pokeTitle">Type:</h2>
                        {fighter2 && fighter2.types 
                        ? 
                        fighter2.types.map(type => (
                            <><h2 className="pokeInfo" key={''}>{type.type.name}</h2></>
                            ))
                            :
                            ''
                        }
                    <h2 className="pokeTitle">Attacks:</h2>
                        {fighter2 && fighter2.attacks
                        ?
                        fighter2.attacks.map(attack => (
                            <><h2 className="pokeInfo">{attack.ability.name}</h2></>
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
                <h3>{fighter1.id
                ?
                <img src={bag} className="bag"></img>
                :
                ''
                }
                </h3>
                <ul>
                {inventory
                ?
                inventory.map(poke => (
                    <li>{poke.name}</li>
                ))
                :
                ""
                }
                </ul>
                </div>
        </div>
    )
}