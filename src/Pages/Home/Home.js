import React, { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";
import "./scroll.png";
import axios from "axios";
import "./home.css"
import { Display } from "./Display";
export const Home = () => {

    const [pokemons, setPokemons] = useState([]);
    const [selected, setSelected] = useState("");


    useEffect(() => {

        const Load = async () => {
            const request = await axios.get("https://pokeapi.co/api/v2/pokemon");
            var pokemons = request.data.results
            setPokemons(pokemons)

        }
        Load();

    }, [])


    return (
        <>
            <div className="NavBar">Pokedex</div>
            <div className="Main">
                <div className="display">
                    <Display selected={selected}/>
                </div>


               
            <div>
                
                <div className="list">
                    
                    {
                        pokemons.map((p) => <Pokemon func={setSelected} nome={p.name} />)
                    }
                    
                </div>
                <div className="flexEnd">
                    <div className="scroll">
                        <img className="scroll" src="https://img.icons8.com/ios/50/null/sort-down.png" alt="scroll icon" />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}