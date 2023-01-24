import React from "react";
import "./List.css";
export const List = ({pokemon}) =>{

    const formatWeigth = (peso) =>{
        var SPeso = peso.toString()
        var tamanho = SPeso.length
        
        if(tamanho === 2){
           return SPeso[0]+","+SPeso[0]+"Kg"
        }else if(tamanho ===3){
            return SPeso[0]+SPeso[1]+","+SPeso[2]+"Kg"
        }else{
            return SPeso[0]+SPeso[1]+SPeso[2]+","+SPeso[3]+"Kg" 
        }
    }
    return(
        <>
        <div className="sec">
            <h2>Tipos</h2>
            <ul>
                {
                    pokemon.types.map((p)=><li>{p.type.name}</li>)
                }
            </ul>
        </div>
        <div className="sec">
            <h2>Peso</h2>
            <li>{formatWeigth(pokemon.weight)}</li>
        </div>
            
        </>
    )
} 