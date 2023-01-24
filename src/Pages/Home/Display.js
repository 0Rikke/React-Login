import React, { useState } from "react";
import axios from "axios";
import "./display.css"
import { List } from "./List";
export const Display = ({selected}) => {

    const [pokemon, setPokemon] = useState([]);

    const firstToUpper = (word) => {
        return word[0].toUpperCase() + word.substring(1);
    }

    const Load = async () => {
        const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selected}`)
        setPokemon(request.data)
    }
    if(selected) Load();

    return (
        <>
        
        {pokemon.length !== 0 &&(
            <>
            <div className="titlePoke">
                <h1>{firstToUpper(pokemon.name)}</h1>
            </div>
            <div className="dispMain">
                <div>
                    <img className="ImgPoke" src={pokemon.sprites.front_default} alt="imgame pokemon" />
                </div>
                <div>
                    <ul>
                        <List pokemon={pokemon} />
                    </ul>
                </div>
            </div>
            </>
        )}

                     
            
        </>
    )
}