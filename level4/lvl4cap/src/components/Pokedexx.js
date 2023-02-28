import React, { useState, useEffect, useContext, useRef} from "react"
import { PokeContext } from './Context'
import { useNavigate } from 'react-router-dom';
import Carousel from "./Carousel";
import Switch from "react-switch";
import poke from '../images/pokeball.png'
import pika from '../images/pikachu.png'

export default function Pokedex() {
    
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    
    return (
        <div className="pd-grid-container">
            <div className="box1">
                <div className="time">
                    <div>{date.toLocaleDateString()}</div>
                    <div>{date.toLocaleTimeString()}</div>
                </div>
                <input style={{height: '200px', width: '220px', alignSelf:"center", fontFamily: "Pokemon GB"}} placeholder='...Search'></input>
                <div className="info-container">
                    <h6 className="stat1">Spd:56</h6>
                    <h6 className="stat2">Hp:56</h6>
                    <h6 className="stat3">Atk:56</h6>
                    <h6 className="stat4">Height: 56cm</h6>
                    <h6 className="stat5">Weight: 56kg</h6>
                </div>
            </div>
            <div className="box2">
                <div className="batt-sub">
                    <div style={{border: 'solid 2px aqua'}}>BATT %</div>
                    <button className="sub-butt">Find</button>
                </div>
                <div className="keypad-container ">
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                </div>
                <input style={{height: '50px', width: '220px', alignSelf:"center", fontFamily: "Pokemon GB"}} placeholder='Description'></input>
            </div>
            <div className="box3">
                <div>
                    <div className="evo-container">
                        <div>
                            <h6>fish</h6>
                            <img src={poke}/>
                        </div>
                        <div>
                            <h6>fisher</h6>
                            <img src={poke}/>
                        </div>
                        <div>
                            <h6>fisherest</h6>
                            <img src={poke}/>
                        </div>
                    </div>
                    <div>
                        Types
                    </div>
                </div>
            </div>
            <div className="box4">
                <div>
                    
                    <img src={pika} style={{height: "60%", width: '80%'}}/>
                </div>
            </div>
        </div>
    )
}