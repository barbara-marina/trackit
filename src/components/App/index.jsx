import "./../../assets/styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/index";
import Register from "../Register/index";
import Habits from "../Habits";
import Today from "../Today/index";
import Historic from "../Historic/index";
import { useState } from "react";
import TokenContext from "./../../contexts/UserContext";

export default function App() {
    const [token, setToken] = useState("");
    
    return (
        <TokenContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/cadastro" element={<Register />}/>
                    <Route path="/habitos" element={<Habits/>}/>
                    <Route path="/hoje" element={<Today/>}/>
                    <Route path="/historico" element={<Historic/>}/>
                </Routes>
            </BrowserRouter>  
        </TokenContext.Provider>
        
    );
}