import "./../../assets/styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/index";
import Register from "../Register/index";
import Habits from "../Habits";
import Today from "../Today/index";
import Historic from "../Historic/index";
import { useState } from "react";
import UserContext from "./../../contexts/UserContext";
import axios from "axios";

export default function App() {
    const [data, setData] = useState({});
    const [percentage, setPercentage] = useState(0);
    const [todayHabits, setTodayHabits] = useState([]);
    const [done, setDone] = useState([]);
    
    function updateDatas() {
        const config = {headers: { Authorization: `Bearer ${data.token}`}};
        const URL_TODAY = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const request = axios.get(URL_TODAY, config);
        
        request.then(r => {setTodayHabits(r.data);
                           setDone(r.data.filter((e) => e.done===true && true));
                           setPercentage(Math.round((done.length*100)/todayHabits.length));
        });
        request.catch(e => console.log(e));
    }

    return (
        <UserContext.Provider value={{data, setData, percentage, setPercentage, todayHabits, setTodayHabits, done, setDone, updateDatas}}>
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