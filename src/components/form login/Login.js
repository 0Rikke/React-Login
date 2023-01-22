import React, { useState } from "react";
import { Input } from "../Input";
import axios from "axios";
import { Mensagem } from "../Mensagem";
import "./form.css";
export const Login = ({show}) => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");
    const [visi,setVisi] = useState("");

    const handleUser = ({ target }) => setUser(target.value)
    const handlePass = ({ target }) => setPass(target.value)

    const requestlogin = async() => {
        const request = await axios.post("http://localhost:8082/api/logUser",{
            name:user,
            password:pass
        });
        setMsg(request.data.msg);
        setPass("");
        setUser("");

        setVisi("flex");
        setTimeout(()=>{
            setVisi("none");
        },5000)

    }   
    return (
        <>
            <form action="" method="POST">
                <Input func={handleUser} name={"user"} value={user} type={"text"} />
                <Input func={handlePass} name={"password"} value={pass} type={"password"} />
                <button type="button" onClick={requestlogin}>submit</button>
            </form>
            <div className="DivBut">
                <button type="button" onClick={show}>Cadastrar</button>
            </div>
            
            {
                msg !== "" && <Mensagem style={visi}msg={msg}/>
            }
        </>
    )
}