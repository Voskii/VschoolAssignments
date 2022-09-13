import React, { useState } from 'react';
import Square from './Square';

export default function BoxOFunzies() {
    const [fish, setFish] = useState(["white", "white", "white", "white"]);
    const colors = ["white", "white", "white", "white"];

    return (
        <div className="gContainer">
            <Square className="unoSquare" color={colors[0]}/>
            <Square className="dosSquare" color={colors[1]}/>
            <Square className="tresSquare" color={colors[2]}/>
            <Square className="quatroSquare" color={colors[3]}/>
        </div>
    )
}