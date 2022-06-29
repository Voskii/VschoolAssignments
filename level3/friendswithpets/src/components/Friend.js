
import React from 'react'
import Pet from "./Pet"

export default function Friend(props) {
    const mapMe = props.pets.map(pet => {
        return (
            <Pet
                name={pet.name}
                breed={pet.breed}
            />
        )
        })

        return (
            <div className="pageDaddy">
                <div className="friendDaddy">
                    <div className='friendMe'><span className='fmName'>Name:</span>
                        <span className='fmnName'>{props.name}</span>
                    </div>
                    <div className='friendAge'><span className='faAge'>Age:</span>
                        {props.age}
                    </div>
                </div>
                <div className="">
                    {mapMe}
                </div>
            </div>
        )

        
}