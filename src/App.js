import React, { useState } from "react";
import { Cadastro } from "./components/form cadastro/Cadastro";
import { Login } from "./components/form login/Login";
export const App = () => {

    const [show, setShow] = useState(false)

    const handleshow  = () => setShow(!show);

    return (
        <>
        <Login/>
            <Cadastro show={show}/>
            <button type="button" onClick={handleshow}>Cadastrar</button>
        </>
    )

}