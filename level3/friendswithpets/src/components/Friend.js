
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
        <section className="FriendMe">
        <div>
            hi
        </div>
        {mapMe}
        </section>
        )
}