import React, { useState } from "react";
import "./pokemon.css";
import Icon from "./icon.png";
import axios from "axios";

export const Pokemon = ({ nome, func }) => {

    const [pokemon, setPokemon] = useState([]);
    (async () => {
        const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`)

        setPokemon(request.data)
    })();

    const firstToUpper = (word) => {
        return word[0].toUpperCase() + word.substring(1);
    }
    

    const handleSelected = () => func(nome)

    return (
        <>
            {
                pokemon.length !== 0 &&
                (
                    <div
                        name={nome}
                        key={pokemon.id}
                        className="pokemon"
                        onClick={handleSelected}
                    >

                        <img id="icon" src={pokemon.sprites.front_default} alt={"miniatura de" + nome} />
                        {firstToUpper(nome)}
                        <img src={Icon} alt="icone de pokebola"></img>
                    </div>
                )
            }

        </>
    )
}