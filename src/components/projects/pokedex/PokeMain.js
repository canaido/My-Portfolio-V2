import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import PokeCard from './PokeCard';
import { getAllPokemon, getPokemon } from './PokeRequest'

const PokeMain = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    let initialUrl = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadingPokemon(response.results);
            setLoading(false);
            console.log(response.results);
        };
        fetchData();
    }, []);

    const next = async () => {
        setLoading(true);
        let data = await getAllPokemon(nextUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const prev = async () => {
        if (!prevUrl) return;
        setLoading(true);
        let data = await getAllPokemon(prevUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    }

    const loadingPokemon = async data => {
        let _pokemonData = await Promise.all(
            data.map(async pokemon => {
                let pokemonRecord = await getPokemon(pokemon.url);
                return pokemonRecord;
            }));

        setPokemonData(_pokemonData);
    }

    return (
        <div className="">
            {loading ? (
                <Spinner />
            ) :
                (
                    <div className="bg-gold-2900">
                        <h1 className="bg-red-2900 p-2 text-center text-2xl font-bold">PokeDex API</h1>
                        <div className="text-center p-2">
                            <button
                                className="text-2xl font-bold bg-sea_green-2900 rounded-2xl p-2 m-1" onClick={prev}
                            >
                                Prev
                            </button>
                            <button
                                className="text-2xl font-bold bg-cerulean-2900 rounded-2xl p-2 m-1"
                                onClick={next}
                            >
                                Next
                            </button>
                        </div>
                        <div className="flex justify-between flex-wrap">
                            {pokemonData.map((pokemon, i) => {
                                return <PokeCard key={i} pokemon={pokemon} />
                            })}
                        </div>
                        <div className="text-center p-2">
                            <button
                                className="text-2xl font-bold bg-sea_green-2900 rounded-2xl p-2 m-1" onClick={prev}
                            >
                                Prev
                            </button>
                            <button
                                className="text-2xl font-bold bg-cerulean-2900 rounded-2xl p-2 m-1"
                                onClick={next}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PokeMain
