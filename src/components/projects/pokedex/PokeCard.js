import React from 'react'
import typeColors from './PokeTypes';
import { getPokemon } from './PokeRequest';

const PokeCard = ({pokemon}) => {
    return (
        <div className="flex bg-cerulean-2900 m-2 p-2 rounded-xl">
            <div>
                <div className="p-1">
                    <img src={pokemon.sprites.front_default} alt="Pokemon" />
                </div>
                <div className="p-1 font-bold capitalize text-center">
                    {pokemon.name}
                </div>
                <div className="p-1">
                    {pokemon.types.map(type => {
                        return (
                            <div className="text-center rounded-lg p-1 m-1" 
                            style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="px-2">
                <div>
                    <p className="px-2 py-1 font-bold">Height:</p>
                    <p className="px-2 py-1">{pokemon.height}"</p>
                </div>
                <div>
                    <p className="px-2 py-1 font-bold">Weight:</p>
                    <p className="px-2 py-1">{pokemon.weight}g</p>
                </div>
                <div>
                    <p className="px-2 py-1 font-bold capitalize">Ability:</p>
                    <p className="px-2 py-1 capitalize">{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    )
}

export default PokeCard
