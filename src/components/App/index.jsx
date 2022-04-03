import "./../../assets/styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/index";
import Register from "../Register/index";
import Habits from "../Habits";
import Today from "../Today/index";
import Historic from "../Historic/index";
import { useState } from "react";
import UserContext from "./../../contexts/UserContext";

export default function App() {
    const [data, setData] = useState({});
    const [percentage, setPercentage] = useState(0);
    
    return (
        <UserContext.Provider value={{data, setData, percentage, setPercentage}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/cadastro" element={<Register />}/>
                    <Route path="/habitos" element={<Habits/>}/>
                    <Route path="/hoje" element={<Today/>}/>
                    <Route path="/historico" element={<Historic/>}/>
                </Routes>
            </BrowserRouter>  
        </UserContext.Provider>
        
    );
}