import React from "react";

export const Input = ({ name, type, value, func }) => {

    return (
        <>
            <label htmlFor={name}>{name}:</label>
                <input onChange={func} value={value} name={name} type={type} required/>
        </>  
    )  
}