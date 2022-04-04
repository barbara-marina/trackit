import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./../../contexts/UserContext";
import LoginPage from "../LoginPage/index";
import RegisterPage from "../RegisterPage/index";
import HabitsPage from "../HabitsPage";
import TodayPage from "../TodayPage/index";
import HistoricPage from "../HistoricPage/index";
import "./../../assets/styles/reset.css";
import axios from "axios";

export default function App() {
    const [data, setData] = useState({});
    const [percentage, setPercentage] = useState(0);
    const [todayHabits, setTodayHabits] = useState([]);
    const [done, setDone] = useState([]);
    
    function updateTodayHabits() {
        const config = {headers: { Authorization: `Bearer ${data.token}`}};
        const URL_TODAY = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const request = axios.get(URL_TODAY, config);
        
        request.then(response => {setTodayHabits(response.data);
                           setDone(response.data.filter(habit => habit.done));
                           setPercentage(Math.round((done.length*100)/todayHabits.length));
                           console.log(todayHabits);
        });
        request.catch(error => console.log(error));
    }

    return (
        <UserContext.Provider value={{data, setData, percentage, setPercentage,
        todayHabits, setTodayHabits, done, setDone, updateTodayHabits}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}/>
                    <Route path="/cadastro" element={<RegisterPage />}/>
                    <Route path="/habitos" element={<HabitsPage/>}/>
                    <Route path="/hoje" element={<TodayPage/>}/>
                    <Route path="/historico" element={<HistoricPage/>}/>
                </Routes>
            </BrowserRouter>  
        </UserContext.Provider>
    );
}