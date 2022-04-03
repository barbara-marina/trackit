import Header from "./../Header/index"
import Footer from "./../Footer/index"
import TodayHabit from "../TodayHabit/index";
import { Container, Title, Progress } from "./style";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Today() {
    const {data} = useContext(UserContext);
    const navigate = useNavigate();
    const [todayHabits, setTodayHabits] = useState([]);

    useEffect(() => !data.token && navigate("/"), [data.token, navigate]);

    useEffect(() => {
        const URL_TODAY_LIST = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const config = {headers: { Authorization: `Bearer ${data.token}`}};
        const request = axios.get(URL_TODAY_LIST, config);
        
        request.then(r => {console.log(r.data);
                           setTodayHabits(r.data);            
        });
        request.catch(e => console.log("e: ", e));
    }, [data.token]);

    return (
        <>
        <Header/>
        <Container>
                <Title>Segunda, 17/05</Title>
                <Progress>Nenhum hábito concluído ainda</Progress>

                {todayHabits.map((todayHabit, i) => <TodayHabit key={i} todayHabit={todayHabit} setTodayHabits={setTodayHabits}/>)}
                
                
            </Container>
        <Footer/>
        </>
    );
}