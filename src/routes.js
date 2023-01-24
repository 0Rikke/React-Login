import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Cadastro } from "./Pages/Cadastro/Cadastro";
import { Login } from "./Pages/Login/Login";

export const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Login/>} path="/" exact/>
                <Route element={<Cadastro/>} path="/cadastrar"/>
                <Route element={<Home/>} path="/pokehome"/>
            </Routes>     
        </BrowserRouter>
    )
}