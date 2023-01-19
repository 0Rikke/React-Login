import React, { useState } from "react";
import { Input } from "../Input";
import axios from "axios";
import { Mensagem } from "../Mensagem";

export const Login = () => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");
    const [visi,setVisi] = useState("");

    const handleUser = ({ target }) => setUser(target.value)
    const handlePass = ({ target }) => setPass(target.value)

    const requestlogin = async() => {
        const request = await axios.post("http://localhost:8081/api/logUser",{
            name:user,
            password:pass
        });
        setMsg(request.data.msg);

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
            {
                msg !== "" && <Mensagem style={visi}msg={msg}/>
            }
        </>
    )
}