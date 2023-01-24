import React, { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";
import "./scroll.png";
import axios from "axios";
import "./home.css"
import { Display } from "./Display";
export const Home = () => {

    const [pokemons, setPokemons] = useState([]);
    const [selected, setSelected] = useState("");
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [next,setNext] = useState("");
    const [prev,setPrev] = useState("");
    

    const handleUrlNext = () => setUrl(next)
    const handleUrlPrev = () => setUrl(prev)

        useEffect(() => {

            const Load = async () => {
                const request = await axios.get(url);
                var pokemons = request.data.results
                setPokemons(pokemons)
                setNext(request.data.next)
                if(request.data.previous === null) return
                setPrev(request.data.previous)

            }
            Load();

        }, [url])


    return (
        <>
            <div className="NavBar">Pokedex</div>
            <div className="Main">
                <div className="display">
                    <Display selected={selected} />
                </div>



                <div>

                    <div className="list">

                        {
                            pokemons.map((p) => <Pokemon func={setSelected} nome={p.name} />)
                        }

                    </div>
                    <div className="flexEnd">
                        <img
                            className="scroll left"
                            src="https://img.icons8.com/ios/50/null/sort-down.png"
                            alt="scroll icon"
                            onClick={handleUrlPrev}
                        />
                        <div className="scroll">
                        
                            <img
                                className="scroll"
                                src="https://img.icons8.com/ios/50/null/sort-down.png"
                                alt="scroll icon" />
                        </div>
                        <img
                            className="scroll right"
                            src="https://img.icons8.com/ios/50/null/sort-down.png"
                            alt="scroll icon"
                            onClick={handleUrlNext}

                        />
                        
                    </div>
                </div>
            </div>
        </>
    )
}