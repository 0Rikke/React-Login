import React, { useState } from "react";
import { Input } from "../../components/Input";
import axios from "axios";
import { Mensagem } from "../../components/Mensagem";
import "./form.css";
import { Link } from "react-router-dom";
import pokebola from "./pokebola.png"
export const Login = () => {

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
        <div className="main">
            <div className="LoginContainer">
                <form action="" method="POST">
                    <Input func={handleUser} name={"user"} value={user} type={"text"} />
                    <Input func={handlePass} name={"password"} value={pass} type={"password"} />
                    <button type="button" onClick={requestlogin}>Logar</button>
            
                </form>
            </div>
            <div className="DivBut">
                    <Link to="/cadastrar">cadastrar usuário ➞</Link>
                </div>
            <div className="Divisor">
                <div className="triangulo"></div>
                    <div className="square">
                        <div>
                            <h1>POKEDEX</h1>
                            <img src={pokebola} alt="pokebola"/>
                        </div>
                        
                        
                    </div>
            </div>

            
            
            
            
            {
                msg !== "" && <Mensagem style={visi}msg={msg}/>
            }
        </div>
    )
}