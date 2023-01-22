import React, { useState } from "react";
import { Input } from "../Input";
import axios from "axios";

import { Mensagem } from "../Mensagem";
export const Cadastro = ({show}) => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");
    const [visi,setVisi] = useState("");

    const handleUser = ({ target }) => setUser(target.value)
    const handlePass = ({ target }) => setPass(target.value)

    const requestCadastro = async () => {

        if(user === "" || pass === ""){
            return window.alert("preencah todos os campos");
        }

        const request = await axios.post("http://localhost:8082/api/CreateUsers", {
            name: user,
            password: pass
        })
        setMsg(request.data.msg);
        setPass("");
        setUser("");

        setVisi("flex");
        setTimeout(()=>{
            setVisi("none");
        },5000)
    }

    return (
        <div style={{display:show ? "block": "none"}}>
            <form action="" method="POST">
                <Input func={handleUser} name={"user"} value={user} type={"text"} />
                <Input func={handlePass} name={"password"} value={pass} type={"password"} />
                <button type="button" onClick={requestCadastro}>submit</button>
            </form>
            {
                msg !== "" && <Mensagem style={visi}msg={msg}/>
            }
        </div>
    )
}