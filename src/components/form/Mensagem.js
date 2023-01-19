import React from "react";
import "./msg.css";

export const Mensagem = ({msg,style}) => {
    return(
        <div className="msg" style={{display:style}}><div>{msg}</div></div>
    )
}
   