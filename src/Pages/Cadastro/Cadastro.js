import React, { useState } from "react";
import { Input } from "../../components/Input";
import axios from "axios";
import "./cadastro.css"
import { Mensagem } from "../../components/Mensagem";
import { Link } from "react-router-dom";

export const Cadastro = () => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [passConf, setPassConf] = useState("");
    const [msg, setMsg] = useState("");
    const [visi,setVisi] = useState("");

    const handleUser = ({ target }) => setUser(target.value)
    const handlePass = ({ target }) => setPass(target.value)
    const handlePassConf = ({ target }) => setPassConf(target.value)

    const requestCadastro = async () => {

        if(user === "" || pass === "" || pass !== passConf){
            return window.alert("OPS ALGO DEU ERRADO VERIFIQUE OS DADOS");
        }

        const request = await axios.post("http://localhost:8081/api/CreateUsers", {
            name: user,
            password: pass
        })
        setMsg(request.data.msg);
        setPass("");
        setUser("");
        setPassConf("");
        setVisi("flex");
        setTimeout(()=>{
            setVisi("none");
        },5000)
    }

    return (
        <>
        <div className="mainCad">
            <div className="Cadastrocontainer">
                <form action="" method="POST">
                    <Input func={handleUser} name={"user"} value={user} type={"text"} />
                    <Input func={handlePass} name={"password"} value={pass} type={"password"} />
                    <Input func={handlePassConf} name={"confirme a senha"} value={passConf} type={"password"} />
                    <button type="button" onClick={requestCadastro}>submit</button>
                </form>
            </div>
            <Link to="/"> ↰ Logar</Link>
        </div>
        
            
            
                
                {
                    msg !== "" && <Mensagem style={visi}msg={msg}/>
                }
            
        </>
        
    )
}