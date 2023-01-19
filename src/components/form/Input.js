import React from "react";

export const Input = ({ name, type, value, func }) => {

    return <input onChange={func} value={value} name={name} type={type} required/>
}