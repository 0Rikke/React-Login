import React, { useState } from "react";
import { Cadastro } from "./components/form cadastro/Cadastro";
import { Login } from "./components/form login/Login";
import "./App.css";

export const App = () => {

    const [show, setShow] = useState(false)

    const handleshow  = () => setShow(!show);

    return (
        <>
            <div className="main">
                <div className="LoguinContainer">
                    <Login show={handleshow}/>
                </div>
                
       
            </div>
            <div className="Divisor">
                <div className="triangulo"></div>
                <div className="square">
                    <div className="Cadastrocontainer">
                        <Cadastro show={show}/>                            
                    </div>   
                </div>
            </div>
            
        </>
    )

}