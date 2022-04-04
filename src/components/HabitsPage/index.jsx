import Footer from "../Footer/index";
import { Container, Title, MyHabits, Plus, Text } from "./style";
import Header from "../Header/index";
import Habit from "../Habit/index";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HabitsPage() {
    const {data} = useContext(UserContext);
    const navigate = useNavigate();
    const [habitList, setHabitList] = useState([]);
    const [plus, setPlus] = useState(false);

    useEffect(() => !data.token && navigate("/"), [data.token, navigate]);
        
    useEffect(() => {
        const URL_HABIT_LIST = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config = {headers: { Authorization: `Bearer ${data.token}`}};
        const request = axios.get(URL_HABIT_LIST, config);
        
        request.then(response => setHabitList(response.data));
        request.catch(error => console.log(error));
    }, [data.token]);


    return (
        <>
            <Header/>
            <Container>
                <Title>
                    <MyHabits>Meu Hábitos</MyHabits>
                    <Plus onClick={() => setPlus(true)}>+</Plus>
                </Title>

                <Habit type="new" setHabitList={setHabitList} habitList={habitList} setPlus={setPlus} plus={plus}/>
                
                {habitList.length===0  && 
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </Text>}

                {habitList.length!==0 && habitList.map((habit, index) => 
                <Habit key={index} type="saved" habitData={habit} setHabitList={setHabitList}/>)}
            </Container>
            <Footer/>
        </>
    );
}