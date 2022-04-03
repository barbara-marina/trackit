import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import Header from "./../Header/index";
import Footer from "./../Footer/index";
import TodayHabit from "../TodayHabit/index";
import { Container, Title, Progress } from "./style";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Today() {
    const {data, percentage, setPercentage} = useContext(UserContext);
    const navigate = useNavigate();
    const [todayHabits, setTodayHabits] = useState([]);
    const [done, setDone] = useState([]);
    dayjs.locale('pt-br');

    useEffect(() => !data.token && navigate("/"), [data.token, navigate]);

    useEffect(() => {
        const URL_TODAY_LIST = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const config = {headers: { Authorization: `Bearer ${data.token}`}};
        const request = axios.get(URL_TODAY_LIST, config);
        
        request.then(r => {setTodayHabits(r.data);
                           setDone(r.data.filter((e) => e.done===true && true));
                           setPercentage(Math.round((done.length*100)/todayHabits.length));
        });
        request.catch(e => console.log("e: ", e));
    }, [data.token, done.length, todayHabits.length, setPercentage]);

    return (
        <>
        <Header/>
        <Container>
                <Title>{`${(dayjs().format('dd'))[0].toUpperCase()}${(dayjs().format('dddd, DD/MM')).slice(1)}`}</Title>
                <Progress done={percentage!==0}>{percentage===0 ? 'Nenhum hábito concluído ainda' : `${percentage}% dos hábitos concluídos`}</Progress>

                {todayHabits.map((todayHabit, i) => <TodayHabit key={i} todayHabit={todayHabit} setTodayHabits={setTodayHabits} setDone={setDone} todayHabits={todayHabits} done={done}/>)}
                
                
            </Container>
        <Footer/>
        </>
    );
}