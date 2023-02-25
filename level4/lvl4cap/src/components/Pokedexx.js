import React, { useState, useEffect, useContext, useRef} from "react"
import { PokeContext } from './Context'
import { useNavigate } from 'react-router-dom';
import Carousel from "./Carousel";
import Switch from "react-switch";

export default function Pokedex() {
    
    
    return (
        <div className="pd-grid-container">
            <div className="box1">
                <div className="time">
                    <div>Feb 24th</div>
                    <div>6pm</div>
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
            <div>
                Box 3
            </div>
            <div>
                Box 4
            </div>
        </div>
    )
}