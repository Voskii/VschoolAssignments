import React, {createContext, useState} from "react";
import axios from "axios";

const PokeContext = createContext()

function PokeProvider(props) {

    const [Pokedata, setPokedata] = useState([])
     
    const getFunc = () => {
        console.log('GET func triggered')
        axios.get('https://pokeapi.co/api/v2/')
            .then(res => {console.log(res.data) 
                setPokedata(res.data)})
            .catch(error => console.log(error))
    }

    return (
        <PokeContext.Provider value={{
            Pokedata,
            getFunc
        }}>
            {props.children}
        </PokeContext.Provider>
    )
}

export {PokeProvider, PokeContext}