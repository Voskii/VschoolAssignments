import React, { useState, useEffect, useContext, useRef} from "react"
import { PokeContext } from './Context'
import { useNavigate } from 'react-router-dom';
import BatteryGauge from 'react-battery-gauge'
import pika from '../images/pikachu.png'
import opika from '../images/oface.png'
import axios from "axios";

export default function Pokedex() {
    
    var [date, setDate] = useState(new Date());
    const [whoDat, setWhoDat] = useState(false)
    const [userPoke, setUserPoke] = useState({})
    const [pokeName, setPokeName] = useState('')
    const [colorCube, setColorCube] = useState({
        box1: 'FFFFFF',
        box2: 'FFFFFF',
        box3: 'FFFFFF',
        box4: 'FFFFFF',
        box5: 'FFFFFF',
        box6: 'FFFFFF',
        box7: 'FFFFFF',
        box8: 'FFFFFF'
    })

    const colors = [
        '000000',
        'C0C0C0',
        '808080',
        '00FF00',
        '800000',
        'FF0000',
        '800080',
        'FF00FF',
        '008000',
        '808000',
        'FFFF00',
        '000080',
        '0000FF',
        '008080',
        '00FFFF',
        'f0f8ff',
        'faebd7',
        '00ffff',
        '7fffd4',
        'f0ffff',
        'd2691e',
        'b2222',
        'ffebcd',
        '6495ed',
        'ff1493'
    ]

    const [count, setCount] = useState(100);
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
        
    });

    useEffect(() => {
        const id = setInterval(() => setCount((oldCount) => oldCount - 1), 5000);
    
        return () => {
            clearInterval(id);
        };
    }, []);

    function handleKeyPress() {
        console.log( "You pressed a key." )
        const colour1 = Math.floor(Math.random() * colors.length-1)
        const colour2 = Math.floor(Math.random() * colors.length-1)
        const colour3 = Math.floor(Math.random() * colors.length-1)
        const colour4 = Math.floor(Math.random() * colors.length-1)
        const colour5 = Math.floor(Math.random() * colors.length-1)
        const colour6 = Math.floor(Math.random() * colors.length-1)
        const colour7 = Math.floor(Math.random() * colors.length-1)
        const colour8 = Math.floor(Math.random() * colors.length-1)

        // const boxNum = Math.floor(Math.random() * colorCube.length-1)

        setColorCube({
            box1: `#${colors[colour1]}`,
            box2: `#${colors[colour2]}`,
            box3: `#${colors[colour3]}`,
            box4: `#${colors[colour4]}`,
            box5: `#${colors[colour5]}`,
            box6: `#${colors[colour6]}`,
            box7: `#${colors[colour7]}`,
            box8: `#${colors[colour8]}`
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setPokeName({[name]:value})
        console.log(`handleCHANGE FUNC:`, pokeName)
    }
    
    const noPoki = () => {
        setWhoDat(!whoDat)
        setPokeName({name: ''})
    }
    const pokeReveal = () => {
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName.name}`)
            .then(res => {
                const speciesUrl = res.data.species.url
                setUserPoke({
                    id: res.data.id,
                    name: res.data.species.name.charAt(0).toUpperCase() + res.data.species.name.slice(1),
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    def: res.data.stats[2].base_stat,
                    speed: res.data.stats[5].base_stat,
                    img: res.data.sprites.other.home.front_default,
                    imgB: res.data.sprites.front_default,
                    types: res.data.types,
                    attacks: res.data.abilities,
                    species: res.data.species.url,
                    height: res.data.height,
                    weight: res.data.weight,
                    evos: '',
                    pk1Img: '',
                    pk2Img: '',
                    pk3Img: ''
                })
                axios.get(speciesUrl)
                    .then(res => {
                        const evo = res.data.evolution_chain.url
                        console.log(`species get call info:`, res.data, evo)
                        setUserPoke(prev => ({
                            ...prev, 
                            species: res.data.flavor_text_entries.filter(e => e.language.name === "en").map(e => e.flavor_text)
                        }))
                        axios.get(evo)
                            .then(res => {
                                let pk1Url = '';
                                let pk2Url = '';
                                let pk3Url = '';
                                if(res.data.chain.species.name && res.data.chain.evolves_to[0] && res.data.chain.evolves_to[0].evolves_to[0]){
                                    console.log(`step1 if url statement`)
                                    pk3Url = `https://pokeapi.co/api/v2/pokemon/${res.data.chain.evolves_to[0].evolves_to[0].species.name}`
                                    pk2Url = `https://pokeapi.co/api/v2/pokemon/${res.data.chain.evolves_to[0].species.name}`
                                    pk1Url = `https://pokeapi.co/api/v2/pokemon/${res.data.chain.species.name}`
                                    // setUserPoke(prev => ({
                                    //     ...prev,
                                    //     pk3Url: `https://pokeapi.co/api/v2/pokemon/${res.data.chain.evolves_to[0].evolves_to[0].species.name}`
                                    // }))
                                } else if (res.data.chain.species.name && res.data.chain.evolves_to[0]){
                                    console.log(`step2 if url statement`)
                                    pk1Url = `https://pokeapi.co/api/v2/pokemon/${res.data.chain.species.name}`
                                    pk2Url = `https://pokeapi.co/api/v2/pokemon/${res.data.chain.evolves_to[0].species.name}`
                                    // setUserPoke(prev => ({
                                    //     ...prev,
                                    //     pk2Url: `https://pokeapi.co/api/v2/pokemon/${res.data.chain.evolves_to[0].species.name}`
                                    // }))
                                } else if (res.data.chain.species.name) {
                                    console.log(`step3 if url statement`)
                                    pk1Url = `https://pokeapi.co/api/v2/pokemon/${res.data.chain.species.name}`
                                    // setUserPoke(prev => ({
                                    //     ...prev,
                                    //     pk1Url: `https://pokeapi.co/api/v2/pokemon/${res.data.chain.species.name}`
                                    // }))
                                }

                                console.log(`evo call:`, res.data.chain)
                                setUserPoke(prev => ({
                                    ...prev, 
                                    evos: res.data.chain
                                }))

                                let endpoints = [pk1Url, pk2Url, pk3Url];
                                console.log(`end point array:`, endpoints)
                                if(endpoints[1] && endpoints[2] && endpoints[2]){
                                    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
                                        (data) => {
                                            console.log(`inside axios.all map PK1 PK2 PK3`, data)
                                            
                                            setWhoDat(!whoDat)
                                            setUserPoke(prev => ({
                                                ...prev,
                                                pk1Img: data[0].data.sprites.front_default,
                                                pk2Img: data[1].data.sprites.front_default,
                                                pk3Img: data[2].data.sprites.front_default
                                            }))},
                                        );
                                    
                                } else if (endpoints[0] && endpoints[1] && endpoints[2] === ''){
                                    axios.all(endpoints.filter(item => item !== endpoints[2]).map((endpoint) => axios.get(endpoint))).then(
                                        (data) => {
                                            console.log(`inside axios.all map PK1 AND PK2`, data)
                                            
                                            setWhoDat(!whoDat)
                                            setUserPoke(prev => ({
                                                ...prev,
                                                pk1Img: data[0].data.sprites.front_default,
                                                pk2Img: data[1].data.sprites.front_default
                                            }))},
                                        );
                                } else if (endpoints[0] && endpoints[1] === '' && endpoints[2] === ''){
                                    axios.get(endpoints[0])
                                        .then(res => {
                                            console.log(`inside get endpoint[0] PK1 call:`, res.data)
                                            
                                            setWhoDat(!whoDat)
                                            setUserPoke(prev => ({
                                                ...prev,
                                                pk1Img: res.data.sprites.front_default
                                            }))
                                        })
                                }
                                
                            })
                    })
                })
            .catch(error => console.log(error))

        console.log(`inside poke Reveal:`, pokeName, userPoke)
        
        
        
    }

    const flavor = () => {
        console.log("Flavor function called")
        console.log(`H6 STATE CALL:`, userPoke?.evos?.species?.name)
    }
    
    return (
        <div className="pd-grid-container">
                {whoDat
                ?
                <div className="box1"> 
                    <div className="time">
                        <div>{date.toLocaleDateString()}</div>
                        <div>{date.toLocaleTimeString()}</div>
                    </div>
                    <img src={userPoke.img
                        ?
                        userPoke.img
                        :
                        userPoke.imgB}  
                        className={userPoke.img?'who-dat-img':'who-dat-imgg'} alt='' /> 
                    <div className="info-container">
                        <h6 className="stat1">Spd:{userPoke.speed}</h6>
                        <h6 className="stat2">Hp:{userPoke.hp}</h6>
                        <h6 className="stat3">Atk:{userPoke.attack}</h6>
                        <h6 className="stat4">Height: {userPoke.height}</h6>
                        <h6 className="stat5">Weight: {userPoke.weight}</h6>
                    </div>
                </div>
                :
                    <div className="box1">
                        <div className="time">
                        <div>{date.toLocaleDateString()}</div>
                        <div>{date.toLocaleTimeString()}</div>
                    </div>
                    <input 
                    className="who-dat-input" 
                    placeholder='...Search' 
                    onChange={handleChange}
                    value={pokeName.name}
                    onKeyDown={(e) => handleKeyPress(e)}
                    name="name"
                    autocomplete="off">
                    </input>
                    <div className="info-container">
                        <h6 className="stat1">Spd: </h6>
                        <h6 className="stat2">Hp: </h6>
                        <h6 className="stat3">Atk: </h6>
                        <h6 className="stat4">Height: </h6>
                        <h6 className="stat5">Weight: </h6>
                    </div>
                </div>
                }
            
            <div className="box2">
                <div className="batt-sub">
                <BatteryGauge value={count} size={70} animated={true}/>
                        {whoDat
                        ?
                            <button className="sub-butt" onClick={() => noPoki()}>Who Dat?</button>
                        :
                            <button className="sub-butt" onClick={() => pokeReveal()}>Find Poke</button>
                        }
                </div>
                <div className="keypad-container ">
                    <div className="key" style={{backgroundColor: `${colorCube.box1}`}}></div>
                    <div className="key" style={{backgroundColor: `${colorCube.box2}`}}></div>
                    <div className="key" style={{backgroundColor: `${colorCube.box3}`}}></div>
                    <div className="key" style={{backgroundColor: `${colorCube.box4}`}}></div>
                    <div className="key" style={{backgroundColor: `${colorCube.box5}`}}></div>
                    <div className="key" style={{backgroundColor: `${colorCube.box6}`}}></div>
                    <div className="key" style={{backgroundColor: `${colorCube.box7}`}}></div>
                    <div className="key" style={{backgroundColor: `${colorCube.box8}`}}></div>
                </div>
                {whoDat
                ?
                    <span className="desc-input" type='text'>{userPoke.species[0]}</span>
                :
                    <span className="desc-input" value='' type='text'>...description...</span>
                }
            </div>
            {whoDat
            ?
            <div className="box3">
                <div>
                    <div className="evo-container">
                        <div className="evoPoke">
                            {userPoke.pk1Img !== ''
                            ?
                                <div>
                                    <h6>{userPoke.evos.species.name}</h6>
                                    <img src={userPoke.pk1Img} className='evo1-img'/>
                                </div>
                            :
                                <div>
                                    <h6>No Data</h6>
                                </div>
                            }
                        </div>
                        <div className="evoPoke">
                            {userPoke.pk2Img !== ''
                            ?
                                <div>
                                    <h6>{userPoke.evos.evolves_to[0].species.name}</h6>
                                    <img src={userPoke.pk2Img} className='evo2-img'/>
                                </div>
                            :
                                <div>
                                    <h6>No Data</h6>
                                </div>
                            }
                        </div>
                        <div className="evoPoke">
                            {userPoke.pk3Img !== ''
                                ?
                                    <div>
                                        <h6>{userPoke.evos.evolves_to[0].evolves_to[0].species.name}</h6>
                                        <img src={userPoke.pk3Img} className='evo3-img'/>
                                    </div>
                                :
                                    <div>
                                        <h6>No Data</h6>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="pDex-infoBanner-types">{whoDat && userPoke.types 
                        ? 
                        userPoke.types.map(type => (
                            <div className={type.type.name}></div>
                            ))
                            :
                            ''
                        }
                    </div>
                </div>
            </div>
            :
            ''
            }
            
            <div className="box4">
            {whoDat
            ?
            <div>
                <img src={pika} style={{height: "60%", width: '80%'}}/>
            </div>
            :
            <div>
                <img src={opika} style={{height: "60%", width: '80%'}}/>
            </div>
            }
                
            </div>
        </div>
    )
}

// userPoke.chain.evolves_to.evolves_to.species.name