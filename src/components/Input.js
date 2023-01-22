import React from "react";

export const Input = ({ name, type, value, func }) => {

    const label = name.toUpperCase();
   

    return (
        <>
            <label htmlFor={{name}}>{label}</label>
                <input style={{display:"block"}} onChange={func} value={value} name={name} type={type} required/>
        </>  
    )  
}