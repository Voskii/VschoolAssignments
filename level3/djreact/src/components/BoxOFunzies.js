import React, { useState } from 'react';
import Square from './Square';

export default function BoxOFunzies() {
    const [colors, setcolors] = useState(["white", "white", "white", "white"]);
    console.log(colors);
    

    return (
        <div className="gContainer">
            <Square className="unoSquare" color={colors[0]}/>
            <Square className="dosSquare" color={colors[1]}/>
            <Square className="tresSquare" color={colors[2]}/>
            <Square className="quatroSquare" color={colors[3]}/>
        </div>
    )
}